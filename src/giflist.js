var React = require('react');

var GifList = React.createClass({
  getInitialState: function() {
    return {
      'name': ''
    }
  },
  chooseName: function(e) {
    e.preventDefault();
    var name = e.target.getAttribute('data-nom');
    this.setState({name: name});
  },
  render: function() {
    var posts = this.props.posts.map(function(post, i) {
      return (
        <li key={i}>
          <a href={post.url}>{post.title}</a>
        </li>
      )
    })
    return (
      <section className='giflist-container'>
        <div onClick={this.chooseName} className='name-choice'>
          <p data-nom='Mary'>Mary</p>
          <p data-nom='Moses'>Moses</p>
        </div>
        <ul>
          <p>Name: {this.state.name}</p>
          {posts}
        </ul>
      </section>
    )
  }
});

module.exports = GifList;