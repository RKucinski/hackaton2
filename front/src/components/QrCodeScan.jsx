/* eslint-disable */
import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class QrCodeScan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			delay: 300,
			result: 'No result',
			resolution: 600,
			dataAtPush: [],
		};
    this.handleScan = this.handleScan.bind(this);
    this.handlePush = this.handlePush.bind(this);
	}
	handleScan(data) {
		if (data) {
			this.setState({
				result: data,
			});
		}
	}

	handlePush(){
		this.setState({
			dataAtPush: this.state.result,
		});
	}
	handleError(err) {
		console.error(err);
	}
	render() {
    console.log("Les datas : " + this.state.dataAtPush + "sont push !")
		return (
			<div>
				<QrReader
					delay={this.state.delay}
					onError={this.handleError}
					resolution={this.resolution}
					onScan={this.handleScan}
					style={{ width: '100%' }}
				/>
				<img src={this.state.result} alt=""/>
				<button onClick={this.handlePush}
					style={{ width: '100', marginBottom: '20', backgroundColor: '#66cccc', textDecoration: 'none' }}
				>
					Valider
				</button>
			</div>
		);
	}
}

export default QrCodeScan;
