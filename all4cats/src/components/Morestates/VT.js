import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import PredictDataService from "../../services/predict.service";


export default class Prediction extends Component {
  constructor(props) {
    super(props);

    this.predictThisData = this.predictThisData.bind(this);
    this.onChangeSaveMonth = this.onChangeSaveMonth.bind(this);
    this.onChangeSaveYear = this.onChangeSaveYear.bind(this);
    this.state = {
      monthForPredict: "",
      yearForPredict: "",
      priceArrayJSON: [],
      predictedPrice: ""

    };

  }

  predictThisData() {
    console.log("clicked");
    const x = parseFloat(this.state.monthForPredict) + (parseFloat(this.state.yearForPredict) - 2005) * 12;
    const state = 533510.32 + -4263.94 * x + 25.84*x*x
    this.setState({
      predictedPrice: state
    });
  }

  onChangeSaveMonth(e) {
    const state = e.target.value;
        this.setState({
          monthForPredict: state
        });
  } 

  onChangeSaveYear(e) {
    const state = e.target.value;
        this.setState({
          yearForPredict: state
        });
  } 


  render() {
    return (
        <div>
          <h2>
            This is VT prediction.
          </h2>
        <div>
        <Plot
        data={[
          {
            x: ["1/31/05", "2/28/05", "3/31/05", "4/30/05", "5/31/05", "6/30/05", "7/31/05", "8/31/05", "9/30/05", "10/31/05", "11/30/05", "12/31/05", "1/31/06", "2/28/06", "3/31/06", "4/30/06", "5/31/06", "6/30/06", "7/31/06", "8/31/06", "9/30/06", "10/31/06", "11/30/06", "12/31/06", "1/31/07", "2/28/07", "3/31/07", "4/30/07", "5/31/07", "6/30/07", "7/31/07", "8/31/07", "9/30/07", "10/31/07", "11/30/07", "12/31/07", "1/31/08", "2/29/08", "3/31/08", "4/30/08", "5/31/08", "6/30/08", "7/31/08", "8/31/08", "9/30/08", "10/31/08", "11/30/08", "12/31/08", "1/31/09", "2/28/09", "3/31/09", "4/30/09", "5/31/09", "6/30/09", "7/31/09", "8/31/09", "9/30/09", "10/31/09", "11/30/09", "12/31/09", "1/31/10", "2/28/10", "3/31/10", "4/30/10", "5/31/10", "6/30/10", "7/31/10", "8/31/10", "9/30/10", "10/31/10", "11/30/10", "12/31/10", "1/31/11", "2/28/11", "3/31/11", "4/30/11", "5/31/11", "6/30/11", "7/31/11", "8/31/11", "9/30/11", "10/31/11", "11/30/11", "12/31/11", "1/31/12", "2/29/12", "3/31/12", "4/30/12", "5/31/12", "6/30/12", "7/31/12", "8/31/12", "9/30/12", "10/31/12", "11/30/12", "12/31/12", "1/31/13", "2/28/13", "3/31/13", "4/30/13", "5/31/13", "6/30/13", "7/31/13", "8/31/13", "9/30/13", "10/31/13", "11/30/13", "12/31/13", "1/31/14", "2/28/14", "3/31/14", "4/30/14", "5/31/14", "6/30/14", "7/31/14", "8/31/14", "9/30/14", "10/31/14", "11/30/14", "12/31/14", "1/31/15", "2/28/15", "3/31/15", "4/30/15", "5/31/15", "6/30/15", "7/31/15", "8/31/15", "9/30/15", "10/31/15", "11/30/15", "12/31/15", "1/31/16", "2/29/16", "3/31/16", "4/30/16", "5/31/16", "6/30/16", "7/31/16", "8/31/16", "9/30/16", "10/31/16", "11/30/16", "12/31/16", "1/31/17", "2/28/17", "3/31/17", "4/30/17", "5/31/17", "6/30/17", "7/31/17", "8/31/17", "9/30/17", "10/31/17", "11/30/17", "12/31/17", "1/31/18", "2/28/18", "3/31/18", "4/30/18", "5/31/18", "6/30/18", "7/31/18", "8/31/18", "9/30/18", "10/31/18", "11/30/18", "12/31/18", "1/31/19", "2/28/19", "3/31/19", "4/30/19", "5/31/19", "6/30/19", "7/31/19", "8/31/19", "9/30/19", "10/31/19", "11/30/19", "12/31/19", "1/31/20", "2/29/20", "3/31/20", "4/30/20", "5/31/20", "6/30/20", "7/31/20", "8/31/20", "9/30/20", "10/31/20"],
                y: [196214, 198117, 199983, 202338, 204207, 205962, 207630, 209768, 212095, 214081, 215783, 217320, 218547, 219902, 221650, 223204, 224764, 226031, 227497, 229010, 230175, 231220, 232221, 233137, 233895, 234764, 235084, 235483, 235730, 236291, 236710, 236685, 236927, 237363, 237967, 238439, 239302, 239160, 239008, 238132, 237542, 236873, 236195, 236079, 235728, 235149, 234450, 233795, 233237, 232970, 232613, 232380, 232185, 231834, 231143, 230041, 229174, 228529, 227937, 227432, 226999, 226823, 226966, 227112, 227252, 227296, 227725, 228189, 228441, 228638, 228637, 228714, 228404, 228133, 227767, 227672, 227384, 227238, 227000, 226829, 226737, 226765, 227054, 227083, 227022, 226842, 226606, 226471, 226407, 226452, 226496, 226537, 226611, 226483, 226240, 226178, 226379, 226618, 226868, 226850, 226796, 226584, 226443, 226363, 226314, 226264, 226279, 226298, 226311, 226209, 225994, 225952, 226055, 226367, 226620, 226844, 227042, 227310, 227560, 227857, 228133, 228471, 228750, 228940, 229040, 229047, 229004, 228965, 228830, 228806, 228826, 228771, 228818, 229168, 229881, 230530, 230837, 231132, 231524, 231872, 232180, 232450, 232903, 233488, 234019, 234448, 234914, 235455, 236310, 237416, 238331, 239566, 240761, 242355, 243648, 244874, 245860, 246630, 247044, 247694, 248291, 248384, 248817, 249167, 250188, 250585, 250989, 251257, 251802, 252927, 254013, 254999, 255512, 256444, 257193, 258340, 259459, 259976, 260239, 260272, 260965, 261357, 261983, 262626, 263682, 264691, 265791, 266643, 267289, 268730],
                type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: this.state.x, y: this.state.y},
        ]}
        layout={ {width: 500, height: 400, title: 'A VT Plot'} }
          />
  
        </div>
        <div>
        <form noValidate autoComplete="off" className="formStyle">
              {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
            <TextField id="outlined-basic10" label="Month" value={this.state.monthForPredict} onChange={this.onChangeSaveMonth} variant="outlined" />
            <TextField id="outlined-basic11" label="Year" value={this.state.yearForPredict} onChange={this.onChangeSaveYear} variant="outlined"/>
        </form>
        <Button onClick={this.predictThisData}>
            Predict the state at this Month-Year
        </Button>
        <Typography>
              Predicted State Average Price: {this.state.predictedPrice}
        </Typography>
        
            
          
          
        </div>

      </div>
    )
  }
}
