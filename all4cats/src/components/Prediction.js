import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import USA from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import { getLocationId, getLocationName } from './utils';
import PriceDataService from "../services/price.service";
import CA from '../assets/CA.png';
import TX from '../assets/TX.png';
// import locationMap from './utils.js';
import Plot from 'react-plotly.js';


export default class Prediction extends Component {
  constructor(props) {
    super(props);

    this.predictThisState = this.predictThisState.bind(this);
    this.onChangeSaveState = this.onChangeSaveState.bind(this);
    this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationClick = this.handleLocationClick.bind(this);
		this.handleLocationFocus = this.handleLocationFocus.bind(this);
		this.handleLocationBlur = this.handleLocationBlur.bind(this);
    
    this.state = {
      stateForPredict: "",
      index: 0,
      imgToShow: [CA, TX],
      x: [],
      y:[],
      tooltipStyle: {
				display: getLocationName
      }
    };
    this.links = {
			"al": "https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat",
      "ak": "https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat",
			"as": 'https://en.wikipedia.org/wiki/Brittany_(administrative_region)',
			"az": 'https://en.wikipedia.org/wiki/Centre-Val_de_Loire',
			"ar": 'https://en.wikipedia.org/wiki/Corsica',
      "ca": './states/CA',
      "fl": './states/FL',
      "ga": './states/GA',
      "il": './states/IL',
      "mi": './states/MI',
      "nc": './states/NC',
      "nj": './states/NJ',
      "ny": './states/NY',
      "ph": './states/OH',
      "pa": './states/PA',
      "tx": './states/TX',
			"co": 'https://en.wikipedia.org/wiki/Hauts-de-France',
			"ct": 'https://en.wikipedia.org/wiki/%C3%8Ele-de-France',

		};

  }


	handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation: pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null });
	}

	handleLocationClick(event) {
		const clickedLocation = getLocationName(event);
		const clickedLocationId = getLocationId(event);
		this.setState({ clickedLocation: clickedLocation });
		window.open(this.links[clickedLocationId], '_blank');
	}

	handleLocationFocus(event) {
		const focusedLocation = getLocationName(event);
		this.setState({ focusedLocation: focusedLocation });
	}

	handleLocationBlur() {
		this.setState({ focusedLocation: null });
	}
  
  predictThisState(event) {
    console.log("clicked search");
    // if (this.state.stateForPredict == "CA") {
    //   this.setState({
    //     index : 0
    //   })
    // } else if (this.state.stateForPredict == "TX") {
    //   this.setState({
    //     index : 1
    //   })
    // }
    // const clickedLocation = getLocationName(event);
		// const clickedLocationId = getLocationId(event);
    // this.setState({ clickedLocation: clickedLocation });
    
		window.open(this.links[this.state.stateForPredict.toLowerCase()], '_blank');
 
    
  }

  onChangeSaveState(e) {
    const state = e.target.value;

        this.setState({
          stateForPredict: state
        });
  } 


  render() {
    return (
        <div>
          <h2>
            This is prediction.
          </h2>
            <form noValidate autoComplete="off" className="formStyle">
              {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
              <TextField id="outlined-basic" label="State" value={this.state.stateForPredict} onChange={this.onChangeSaveState} variant="outlined"/>
            </form>
            <Button onClick={this.predictThisState}>
          Predict the state
          
            </Button>
        <div>
          <p>
            Please use Postal Abbreviations
          </p>
          <p>
            For instance: "CA", "IL", "NY", "TX", "PA", "NJ", "GA", "MI", "NC", "OH"
          </p>
          <p>
            Or you can click on the map below
          </p>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", height:"43rem", marginBottom:"2rem"}}>
          <SVGMap map={USA}
                  type="link"
              onLocationMouseOver={this.handleLocationMouseOver}
              onLocationMouseOut={this.handleLocationMouseOut}
              onLocationClick={this.handleLocationClick}
              onLocationFocus={this.handleLocationFocus}
              onLocationBlur={this.handleLocationBlur} />
        </div>

      </div>
    )
  }
}
