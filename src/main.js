var React = require('react'),
    ReactDOM = require('react-dom'),
    GifList = require('./giflist'),
    Reddit = require('./reddit');


Reddit.getPosts()
  .then(function(posts) {
      ReactDOM.render(
        <GifList posts={posts} />,
        document.getElementById('init')
      );
  })
  .catch(function(err) {
    console.log(err);
  })
