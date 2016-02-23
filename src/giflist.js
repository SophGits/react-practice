var React = require('react');

var GifList = React.createClass({
  render: function() {
    var posts = this.props.posts.map(function(post, i) {
      return (
        <li key={i}>
          <a href={post.url}>{post.title}</a>
        </li>
      )
    })
    return <ul>{posts}</ul>
  }
});

module.exports = GifList;