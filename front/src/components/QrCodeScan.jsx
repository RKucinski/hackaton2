/* eslint-disable */
import React, { Component } from "react";
import QrReader from "react-qr-reader";
 
class QrCodeScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result",
      resolution: 600,
      legacyMode: true,
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          resolution={this.resolution}
          onScan={this.handleScan}
          style={{ width: "100%" }}
          legacyMode={this.state.legacyMode}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QrCodeScan;