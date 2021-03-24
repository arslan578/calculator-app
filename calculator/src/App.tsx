import React, { Component } from "react";
import axios from "axios";
import "./App.css";

interface AbcState {
  number_1: Number;
  number_2: Number;
  result: any;
}

class App extends Component<{}, AbcState> {
  constructor(props: any) {
    super(props);
    this.state = {
      number_1: 0,
      number_2: 0,
      result: 0
    };
  }

  handleChangenumber1 = (e: any) => {
    this.setState({ number_1: e.target.value });
  };
  handleChangenumber2 = (e: any) => {
    this.setState({ number_2: e.target.value });
  };

  getNumberSum = () => {
    let data = this.state;

    axios.post(`http://localhost:3000/sum/`, data).then(res => {
      console.log(res.data.sum);
      this.setState({ result: res.data.sum });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">Calculator</div>
        <div className="sum-form">
          <div className="form-title">Enter the Numbers</div>
          <br />
          <div>
            <input
              className="input-field"
              type="number"
              placeholder="number 1"
              onChange={this.handleChangenumber1}
            />
          </div>
          <br />
          <div>
            <input
              className="input-field"
              type="number"
              placeholder="number 2"
              onChange={this.handleChangenumber2}
            />
          </div>
          <br />
          <div>
            <button className="sum-button" onClick={this.getNumberSum}>
              Sum
            </button>
          </div>
          <div>
            <hr />
          </div>

          <div>Result</div>
          <input
            className="result-field"
            type="number"
            value={this.state.result}
            disabled
          />
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
