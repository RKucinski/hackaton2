/* eslint-disable */
import React, { Component } from 'react';
import BottomNav from './BottomNav';
import InfoUser from './InfoUser';
// import NavBarSwitch from './NavBarSwitch'

export default class Home extends Component {
	render() {
		return (
			<div>
        <InfoUser/>
				<BottomNav />
			</div>
		);
	}
}
