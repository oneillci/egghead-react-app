// var React = require('react');
// var Router = require('react-router'); // installed via npm install --save react-router
// var routes = require('./config/routes');

import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, function(Root) {
	React.render(<Root />, document.getElementById("app"))
});