import React from 'react';
import {RouteHandler} from 'react-router';

export default class Main extends React.Component {
	render() {
		return (
			<div className="main-container">
				<nav className="navbar navbar-default">
					<div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
						es6 menu
					</div>
				</nav>
				<div className="container">
					<RouteHandler />
				</div>
			</div>)
	}
}

/* web pack is run via webpack -w */

// var React = require('react');
// var RouteHandler = require('react-router').RouteHandler;

// var Main = React.createClass({
// 	render: function(){
// 		return (
// 			<div className="main-container">
// 				<nav className="navbar navbar-default">
// 					<div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
// 						MENU
// 					</div>
// 				</nav>
// 				<div className="container">
// 					<RouteHandler />
// 				</div>
// 			</div>
// 		)
// 	}
// });

// react-router now responsible for rendering, so just export main
// React.render(<Main />, document.getElementById("app"));
// module.exports = Main;
