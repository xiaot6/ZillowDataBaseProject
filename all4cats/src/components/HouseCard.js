import React, { Component } from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import Favorited from '@material-ui/icons/Favorite';
import HotelIcon from '@material-ui/icons/LocalHotelOutlined';
import BathtubIcon from '@material-ui/icons/BathtubOutlined';
import {Grid} from '@material-ui/core'
import HouseDataService from "../services/house.service";
import { fb, auth, addFavoriteHouse, deleteFavoriteHouse } from '../firebase';


export default class HouseCard extends Component {


    constructor(props) {
        super(props);
        this.onChangeFavorite = this.onChangeFavorite.bind(this);
        this.updateLikes = this.updateLikes.bind(this);
        this.state = {
            user: props.user,
            houseJSON: props.houseInfo,
            favorited: false,
            num_likes: 0,
        };
    }
    async componentDidMount() {
        var houseID = this.state.houseJSON.house_id;
        var favorited = false;
        var user = this.state.user;
        if (user) {
            await fb.ref(`users/${user.uid}/favoriteHouse`).orderByKey().once("value")
            .then(function(snapshot) {
                var array = snapshot.val();
                for (var i in array) {
                    var value = array[i]
                    if (value.houseId == houseID) {
                        console.log(houseID);
                        favorited = true;
                        break;
                    }
                }
            });
            console.log(favorited);
            if (favorited) {
                this.setState({
                    favorited: true,
                });
            }      

            HouseDataService.getLikesById(houseID)
            .then(response => {
                this.setState({
                    num_likes: response.data
                });
                })
                .catch(e => {
                console.log(e);
            });
        }
    }

    updateLikes() {
        HouseDataService.updateLikeById(
            this.state.houseJSON.house_id,
            {
                id: this.state.houseJSON.house_id,
                likes: this.state.houseJSON.likes + 1,
            }
          )
            .then(response => {
              console.log(response.data);
              this.setState({
                num_likes: response.data.likes
              });
            })
            .catch(e => {
              console.log(e);
            });
    }

    async onChangeFavorite() {
        this.setState({
            favorited: !this.state.favorited,
        });

        var user = this.state.user;
        var houseId = this.props.houseInfo.house_id;

        if (!this.state.favorited) {
            try {
                await addFavoriteHouse(user, houseId);
                // Add like for house with house_id
                this.updateLikes();
            } catch (error) {
                console.error("Error adding favorites", error);
            }
        } else {
            try {
                await deleteFavoriteHouse(user, houseId);
                // Delete like for house with house_id
            } catch (error) {
                console.error("Error adding favorites", error);
            }
        }
    }

    render() {
        const houseJSON = this.state.houseJSON;
        return(
        <Card style={{width: "400px"}} variant='outlined'>
            <CardMedia style={{height: 0,
                        paddingTop: '43.25%'}} 
                        image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
            <CardContent style={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography>Company: {houseJSON.company}</Typography>
                        <Typography>Price: ${houseJSON.price}</Typography>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: "10px"}}>
                            <Typography>{houseJSON.num_of_bedrooms}</Typography>
                            <HotelIcon />
                            <Typography>{houseJSON.num_of_bathrooms}</Typography>
                        <BathtubIcon />
                        </div>
                        {/* <Typography></Typography> */}
                    </Grid>
                    <Grid item xs={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
                        <Typography>Address: {houseJSON.address}</Typography>
                        <Typography>City: {houseJSON.city}</Typography>
                        <Typography>State: {houseJSON.state}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <div style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
                    <IconButton aria-label="add to favorites" onClick={this.onChangeFavorite}>
                        {this.state.favorited ? <Favorited color="secondary"/> : <FavoriteIconOutlined/>}
                    </IconButton>
                    <Typography>
                        {this.state.num_likes}
                    </Typography>
                </div>
            </CardActions>
        </Card>
        );
    }
}