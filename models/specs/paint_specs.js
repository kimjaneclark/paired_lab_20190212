const assert = require ('assert')
const Paint = require ('../paint.js')

describe('Paint', function(){

  let paint;
  beforeEach(function(){
    paint = new Paint(200);
  });

  it('should have a volume', function(){
    const actual = paint.volume;
    assert.strictEqual(actual, 200);
  });

  it('should check if empty', function(){
    const paint = new Paint(0);
    const actual = paint.checkEmpty();
    assert.strictEqual(actual, true);
  })

  it('should be able to empty itself', function(){
    paint.emptyItself();
    const actual = paint.volume
    assert.strictEqual(actual, 0)

  })

});
