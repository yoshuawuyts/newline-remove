/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var remove = require('./index');

/**
 * Test
 */

describe('newline-remove', function() {
  it('should assert argument types', function() {
    remove.bind(remove, 123)
      .should.throw('newline-remove: val should be a string');
  });

  it('should strip all newlines from the string', function() {
    var val = 'foo \n bar \r \n bla bla bla bla';
    remove(val).should.eql('foo  bar   bla bla bla bla');
  })
});
