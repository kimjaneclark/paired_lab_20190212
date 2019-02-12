const assert = require ('assert')
const Room = require ('../room.js')

describe('Room', function(){

  let room;
  beforeEach(function(){
    room = new Room("Lounge", 108);
  });

  it('should have a name', function(){
    const actual = room.name;
    assert.strictEqual(actual, "Lounge");
  });

  it ('should have an area', function(){
    const actual = room.squareArea;
    assert.strictEqual(actual, 108);
  })

  it ('should not already be painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, 0);
  })

  it ('should be able to be painted', function(){
    room.paintSquareArea();
    const actual = room.painted;
    assert.strictEqual(actual, 1)

  })











})
