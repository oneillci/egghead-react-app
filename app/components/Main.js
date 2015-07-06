/* web pack is run via webpack -w */

var React = require('react');

var Main = React.createClass({
	render: function(){
		return (
			<div>Hello World</div>
		)
	}
});

// react-router now responsible for rendering, so just export main
// React.render(<Main />, document.getElementById("app"));
module.exports = Main;