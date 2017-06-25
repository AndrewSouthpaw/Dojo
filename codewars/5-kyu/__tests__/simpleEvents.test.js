describe('Event', () => {
  function f() {
    f.calls = (f.calls || 0) + 1
    f.args = Array.prototype.slice.call(arguments)
  }

  beforeEach(() => {
    f.calls = 0
  })

  it('should subscribe and emit parameters to the subscribed function', () => {
    const event = new Event()
    event.subscribe(f)
    event.emit(1, 'foo', [1, 2, 3])
    expect(f.calls).to.eql(1)
    expect(f.args).to.eql([1, 'foo', [1, 2, 3]])
  });

  it('should unsubscribe a function', () => {
    const event = new Event()
    event.subscribe(f)
    event.emit()
    event.unsubscribe(f)
    event.emit()
    expect(f.calls).to.eql(1)
  });

  it('handles multiple subscriptions', () => {
    const event = new Event()
    const g = function() {
      g.calls = (g.calls || 0) + 1
      g.args = Array.prototype.slice.call(arguments)
    }
    event.subscribe(f)
    event.subscribe(g)
    event.emit(1, 'foo', [1, 2, 3])
    expect(f.calls).to.eql(1)
    expect(f.args).to.eql([1, 'foo', [1, 2, 3]])
    expect(g.calls).to.eql(1)
    expect(g.args).to.eql([1, 'foo', [1, 2, 3]])
    event.unsubscribe(g)
    event.emit(2)
    expect(f.calls).to.eql(2)
    expect(g.calls).to.eql(1)
  });
});
