jest.dontMock('../giflist');
var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    GifList = require('../giflist');

describe('gif list', function() {

  it('renders a list of gifs', function() {
    var posts = [
      {
        title: 'Cat',
        url: 'http://i.imgur.com/ICp2tEY.gifv'
      },
      {
        title: 'Dog',
        url: 'http://i.imgur.com/0yQ6rZ9.gifv'
      }
    ];

    var renderedElementWithItems = TestUtils.renderIntoDocument(<GifList posts={posts} />);
    var listItems = TestUtils.scryRenderedDOMComponentsWithTag(renderedElementWithItems, 'li');
    expect(listItems.length).toEqual(2);

    expect(listItems[0].textContent).toEqual('Cat');
    expect(listItems[1].textContent).toEqual('Dog');


  }) // it

}) // describe