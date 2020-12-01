import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';


export default class Prediction extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      time: ""
    };

  }

  predictThisState() {
    console.log("clicked search");
    if (this.state.stateForPredict == "CA") {
      this.setState({
        index : 0
      })
    } else if (this.state.stateForPredict == "TX") {
      this.setState({
        index : 1
      })
    }
 
    
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
            This is IL prediction.
          </h2>
        <div>
        <Plot
        data={[
          {
                x: ["1/31/05", "2/28/05", "3/31/05", "4/30/05", "5/31/05", "6/30/05", "7/31/05", "8/31/05", "9/30/05", "10/31/05", "11/30/05", "12/31/05", "1/31/06", "2/28/06", "3/31/06", "4/30/06", "5/31/06", "6/30/06", "7/31/06", "8/31/06", "9/30/06", "10/31/06", "11/30/06", "12/31/06", "1/31/07", "2/28/07", "3/31/07", "4/30/07", "5/31/07", "6/30/07", "7/31/07", "8/31/07", "9/30/07", "10/31/07", "11/30/07", "12/31/07", "1/31/08", "2/29/08", "3/31/08", "4/30/08", "5/31/08", "6/30/08", "7/31/08", "8/31/08", "9/30/08", "10/31/08", "11/30/08", "12/31/08", "1/31/09", "2/28/09", "3/31/09", "4/30/09", "5/31/09", "6/30/09", "7/31/09", "8/31/09", "9/30/09", "10/31/09", "11/30/09", "12/31/09", "1/31/10", "2/28/10", "3/31/10", "4/30/10", "5/31/10", "6/30/10", "7/31/10", "8/31/10", "9/30/10", "10/31/10", "11/30/10", "12/31/10", "1/31/11", "2/28/11", "3/31/11", "4/30/11", "5/31/11", "6/30/11", "7/31/11", "8/31/11", "9/30/11", "10/31/11", "11/30/11", "12/31/11", "1/31/12", "2/29/12", "3/31/12", "4/30/12", "5/31/12", "6/30/12", "7/31/12", "8/31/12", "9/30/12", "10/31/12", "11/30/12", "12/31/12", "1/31/13", "2/28/13", "3/31/13", "4/30/13", "5/31/13", "6/30/13", "7/31/13", "8/31/13", "9/30/13", "10/31/13", "11/30/13", "12/31/13", "1/31/14", "2/28/14", "3/31/14", "4/30/14", "5/31/14", "6/30/14", "7/31/14", "8/31/14", "9/30/14", "10/31/14", "11/30/14", "12/31/14", "1/31/15", "2/28/15", "3/31/15", "4/30/15", "5/31/15", "6/30/15", "7/31/15", "8/31/15", "9/30/15", "10/31/15", "11/30/15", "12/31/15", "1/31/16", "2/29/16", "3/31/16", "4/30/16", "5/31/16", "6/30/16", "7/31/16", "8/31/16", "9/30/16", "10/31/16", "11/30/16", "12/31/16", "1/31/17", "2/28/17", "3/31/17", "4/30/17", "5/31/17", "6/30/17", "7/31/17", "8/31/17", "9/30/17", "10/31/17", "11/30/17", "12/31/17", "1/31/18", "2/28/18", "3/31/18", "4/30/18", "5/31/18", "6/30/18", "7/31/18", "8/31/18", "9/30/18", "10/31/18", "11/30/18", "12/31/18", "1/31/19", "2/28/19", "3/31/19", "4/30/19", "5/31/19", "6/30/19", "7/31/19", "8/31/19", "9/30/19", "10/31/19", "11/30/19", "12/31/19", "1/31/20", "2/29/20", "3/31/20", "4/30/20", "5/31/20", "6/30/20", "7/31/20", "8/31/20", "9/30/20", "10/31/20"],
                y: [214669, 216032, 217375, 218845, 220305, 221820, 223355, 224842, 226520, 228151, 229647, 231007, 232261, 233567, 234652, 235718, 236596, 237366, 237925, 238541, 238960, 239317, 239518, 239852, 240333, 240935, 240784, 240659, 239828, 239618, 238799, 238467, 237638, 237141, 236463, 235644, 234796, 232528, 231804, 229332, 228658, 225891, 224673, 221937, 220356, 217712, 215562, 212481, 209351, 207001, 204403, 202611, 200137, 198322, 196859, 195680, 194082, 192809, 191646, 191482, 190900, 190629, 189235, 189105, 187941, 187965, 185749, 184589, 182753, 181755, 179806, 178140, 176478, 175197, 174014, 172112, 170796, 168910, 168452, 167324, 166747, 164941, 164019, 162534, 161745, 160164, 159788, 159294, 159286, 158838, 158206, 157628, 157101, 157442, 157991, 158577, 159261, 160173, 160804, 161733, 162356, 163590, 164738, 166369, 167804, 169407, 170234, 171299, 171923, 172855, 173259, 173432, 173864, 174603, 175374, 175810, 176354, 176662, 177247, 177650, 178029, 178148, 178663, 179474, 180263, 180496, 180774, 181021, 181363, 181610, 181909, 182380, 182985, 184044, 184946, 185704, 186220, 186881, 187670, 188421, 189062, 189772, 190642, 191584, 192597, 193377, 194303, 195153, 195967, 196602, 197152, 197850, 198621, 199460, 200242, 201097, 201968, 202645, 203038, 203443, 204034, 204792, 205320, 205738, 206126, 206476, 206788, 206978, 207049, 207331, 207676, 208239, 208819, 209353, 209713, 209851, 209620, 209366, 209071, 209107, 209335, 209605, 210053, 210484, 210959, 211552, 212542, 213879, 215671, 217672],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: this.state.x, y: this.state.y},
        ]}
        layout={ {width: 500, height: 400, title: 'A IL Plot'} }
          />
  
        </div>
        <div>
        <form noValidate autoComplete="off" className="formStyle">
              {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
              <TextField id="outlined-basic" label="State" value={this.state.stateForPredict} onChange={this.onChangeSaveState} variant="outlined"/>
            </form>
            <Button onClick={this.predictThisState}>
                Predict the state
            </Button>
        </div>

      </div>
    )
  }
}
