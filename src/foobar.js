var React = require('react');

var Foobar = React.createClass({
  render: function() {
    var test = 'Hello, world';
    return <p>{test}</p>
  }
});

module.exports = Foobar;