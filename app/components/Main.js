/* web pack is run via webpack -w */

var React = require('react');

var Main = React.createClass({
	render: function(){
		return (
			<div>Hello World</div>
		)
	}
});

React.render(<Main />, document.getElementById("app"));