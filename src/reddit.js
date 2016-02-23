var axios = require('axios'),
    Promise = require('es6-promise').Promise;

function getPosts() {
  var url = 'https://www.reddit.com/r/gifs.json';

  return axios.get(url)
    .then(function(res) {
      return res.data.data.children.map(function(child) {
        return child.data;
      });
    })
}

module.exports = {
  getPosts: getPosts
}