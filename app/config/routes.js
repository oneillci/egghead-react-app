import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import {Router, DefaultRoute, Route} from 'react-router';

const routes = (
	<Route name="app" path="/" handler={Main}>
		<DefaultRoute handler={Home} />
	</Route>	
);

export default routes;

// var React = require('react');
// var Main = require('../components/Main');
// var Home = require('../components/Home');
// var Router = require('react-router');
// var DefaultRoute = Router.DefaultRoute;
// var Route = Router.Route;

// module.exports = (
// 	<Route name="app" path="/" handler={Main}>
// 		<DefaultRoute handler={Home} />
// 	</Route>	
// );
