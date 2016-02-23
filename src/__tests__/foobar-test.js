jest.dontMock('../foobar');
var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    Foobar = require('../foobar');

describe('foobar', function() {
  it('renders \'Hello, World\'', function() {
    var helloworld = TestUtils.renderIntoDocument(
      <Foobar />
    );

    var node = ReactDOM.findDOMNode(helloworld);
    expect(node.textContent).toEqual('Hello, world');
  })
})