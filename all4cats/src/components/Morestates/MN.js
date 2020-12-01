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
            This is MN prediction.
          </h2>
        <div>
        <Plot
        data={[
          {
            x: ["1/31/05", "2/28/05", "3/31/05", "4/30/05", "5/31/05", "6/30/05", "7/31/05", "8/31/05", "9/30/05", "10/31/05", "11/30/05", "12/31/05", "1/31/06", "2/28/06", "3/31/06", "4/30/06", "5/31/06", "6/30/06", "7/31/06", "8/31/06", "9/30/06", "10/31/06", "11/30/06", "12/31/06", "1/31/07", "2/28/07", "3/31/07", "4/30/07", "5/31/07", "6/30/07", "7/31/07", "8/31/07", "9/30/07", "10/31/07", "11/30/07", "12/31/07", "1/31/08", "2/29/08", "3/31/08", "4/30/08", "5/31/08", "6/30/08", "7/31/08", "8/31/08", "9/30/08", "10/31/08", "11/30/08", "12/31/08", "1/31/09", "2/28/09", "3/31/09", "4/30/09", "5/31/09", "6/30/09", "7/31/09", "8/31/09", "9/30/09", "10/31/09", "11/30/09", "12/31/09", "1/31/10", "2/28/10", "3/31/10", "4/30/10", "5/31/10", "6/30/10", "7/31/10", "8/31/10", "9/30/10", "10/31/10", "11/30/10", "12/31/10", "1/31/11", "2/28/11", "3/31/11", "4/30/11", "5/31/11", "6/30/11", "7/31/11", "8/31/11", "9/30/11", "10/31/11", "11/30/11", "12/31/11", "1/31/12", "2/29/12", "3/31/12", "4/30/12", "5/31/12", "6/30/12", "7/31/12", "8/31/12", "9/30/12", "10/31/12", "11/30/12", "12/31/12", "1/31/13", "2/28/13", "3/31/13", "4/30/13", "5/31/13", "6/30/13", "7/31/13", "8/31/13", "9/30/13", "10/31/13", "11/30/13", "12/31/13", "1/31/14", "2/28/14", "3/31/14", "4/30/14", "5/31/14", "6/30/14", "7/31/14", "8/31/14", "9/30/14", "10/31/14", "11/30/14", "12/31/14", "1/31/15", "2/28/15", "3/31/15", "4/30/15", "5/31/15", "6/30/15", "7/31/15", "8/31/15", "9/30/15", "10/31/15", "11/30/15", "12/31/15", "1/31/16", "2/29/16", "3/31/16", "4/30/16", "5/31/16", "6/30/16", "7/31/16", "8/31/16", "9/30/16", "10/31/16", "11/30/16", "12/31/16", "1/31/17", "2/28/17", "3/31/17", "4/30/17", "5/31/17", "6/30/17", "7/31/17", "8/31/17", "9/30/17", "10/31/17", "11/30/17", "12/31/17", "1/31/18", "2/28/18", "3/31/18", "4/30/18", "5/31/18", "6/30/18", "7/31/18", "8/31/18", "9/30/18", "10/31/18", "11/30/18", "12/31/18", "1/31/19", "2/28/19", "3/31/19", "4/30/19", "5/31/19", "6/30/19", "7/31/19", "8/31/19", "9/30/19", "10/31/19", "11/30/19", "12/31/19", "1/31/20", "2/29/20", "3/31/20", "4/30/20", "5/31/20", "6/30/20", "7/31/20", "8/31/20", "9/30/20", "10/31/20"],
                y: [217222, 218587, 219747, 220948, 222173, 223314, 224295, 225077, 226050, 226878, 227851, 228488, 228929, 229196, 229478, 229679, 229745, 229817, 229792, 229688, 229287, 228978, 228618, 228547, 228507, 228562, 228384, 227921, 227125, 226089, 224943, 224120, 223358, 222666, 221538, 220017, 218264, 216218, 214455, 212704, 211068, 209458, 207799, 205898, 203989, 202062, 200355, 198729, 197066, 195432, 193286, 191422, 189895, 188943, 188259, 187873, 187515, 187067, 186559, 186482, 186479, 186731, 187073, 187379, 187486, 186958, 186117, 184624, 182955, 181291, 179927, 178270, 176709, 174921, 173444, 171770, 170117, 168603, 167341, 166560, 165933, 165321, 164595, 163971, 163526, 163453, 163677, 164229, 164714, 165478, 166301, 167328, 168512, 169961, 171547, 173135, 174549, 175561, 176307, 177076, 178616, 180329, 182249, 184012, 185755, 187389, 188726, 189863, 191078, 192371, 193889, 195181, 196133, 196708, 196946, 196991, 196937, 196895, 197060, 197557, 198027, 198955, 199774, 200839, 201555, 202236, 202953, 203758, 204742, 205690, 206770, 207820, 209099, 210180, 211146, 211819, 212473, 213399, 214620, 216123, 217454, 218852, 220059, 221200, 222146, 223133, 224352, 225874, 227599, 229193, 230528, 231492, 232504, 233428, 234726, 236139, 237733, 239325, 240927, 242366, 243577, 244580, 245543, 246695, 247698, 248695, 249522, 250397, 251349, 252207, 252847, 253527, 254491, 255801, 257035, 257870, 258721, 259422, 260202, 260946, 261770, 262717, 263860, 265092, 266268, 267393, 268742, 270484, 272397, 274571],
                type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: this.state.x, y: this.state.y},
        ]}
        layout={ {width: 500, height: 400, title: 'A MN Plot'} }
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
