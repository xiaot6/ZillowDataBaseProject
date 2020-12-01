import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth, addFavoriteLayoutAndType } from "../firebase";
import {makeStyles} from '@material-ui/core/styles';
import { Button, Typography, Card, TextField, InputAdornment, OutlinedInput } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      paddingTop: "100px",
      display: 'flex',
      // flexDirection: "column",
      justifyContent: "center",
  },
  card: {
    display: 'flex',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {displayName, email} = user;
  const classes = useStyles();
  const [bedrooms, setBedrooms] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');

  const [lowerPrice, setLowerPrice] = React.useState('');
  const [upperPrice, setUpperPrice] = React.useState('');

  console.log(displayName);
  console.log(email);


  const onChangeSaveBedrooms = (event) => {
    setBedrooms(event.target.value);
  };

  const onChangeSaveBathrooms = (event) => {
    setBathrooms(event.target.value);
  };

  const onChangeSaveLowerPrice = (event) => {
    setLowerPrice(event.target.value);
  };

  const onChangeSaveUpperPrice = (event) => {
    setUpperPrice(event.target.value);
  };

  function onClickSavePreferences(user, bed, bath, lower, upper) {
    console.log(bed);
    console.log(bath);
    addFavoriteLayoutAndType(user, bed, bath, lower, upper);
  };

  return (
    <div className={classes.root}>
      <div style={{width:"320px"}}>
        <Card variant="outlined">
            <div style={{display: 'flex', flexDirection: "column", justifyContent:"flex-start"}}>
            <h2>
              My Profile
            </h2>
            <Typography>
              Display Name: {displayName}
            </Typography>
            <Typography>
              Email: {email}
            </Typography>
            </div>
            <Button variant="contained" color="secondary" style={{marginTop:"1rem", marginBottom:"0.5rem"}} onClick = {() => {auth.signOut()}}>
              Sign Out
            </Button>
        </Card>
        <Card style={{marginTop: "2rem"}} variant="outlined">
            <h2>
              My Preference
            </h2>
            <Typography>
              Favorite Layout: 
            </Typography>
            <div style={{margin: "2px 15px", display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
              <TextField margin='dense' size="small" style={{width: "40px"}} value={bedrooms} onChange={onChangeSaveBedrooms} variant="outlined">
              </TextField>
              <Typography>
                Bedrooms
              </Typography>
              <TextField margin='dense' size="small" style={{width: "40px"}} value={bathrooms} onChange={onChangeSaveBathrooms} variant="outlined"></TextField>
              <Typography>
                Bathrooms
              </Typography>
            </div>

            <Typography style={{marginTop: "20px", marginBottom: "10px"}}>
              Favorite Price Range: 
            </Typography>
            <div style={{margin: "2px 15px", display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
              <Typography>
                Lower
              </Typography>
              <OutlinedInput startAdornment={<InputAdornment position="start">$</InputAdornment>} margin='dense' size="small" style={{width: "90px"}} value={lowerPrice} onChange={onChangeSaveLowerPrice} variant="outlined"></OutlinedInput>
              <Typography>
                Upper
              </Typography>
              <OutlinedInput startAdornment={<InputAdornment position="start">$</InputAdornment>} margin='dense' size="small" style={{width: "90px"}} value={upperPrice} onChange={onChangeSaveUpperPrice} variant="outlined"></OutlinedInput>
            </div>

            <Button variant="contained" color="primary" style={{margin: "15px 0px"}} onClick={() => onClickSavePreferences(user, bedrooms, bathrooms, lowerPrice, upperPrice)}>
              Save Preferences
            </Button>
        </Card>
      </div>
    </div>
  ) 
};
export default ProfilePage;