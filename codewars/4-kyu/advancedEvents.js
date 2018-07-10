/**
https://www.codewars.com/kata/52d4678038644497e900007c/train/javascript

This excercise is a more sophisticated version of Simple Events kata.

Your task is to implement an Event constructor function for creating event objects

var event = new Event();
which comply to the following:

an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers
.subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate invalid arguments
(not functions, or for unsubscribe, functions which are not subscribed) by simply skipping them
multiple subscription of the same handler is allowed, and in this case unsubscription removes the last subscription of
the same handler
an event object should have an .emit() method which must invoke all the handlers with the arguments provided
.emit() should use its own invocation context as handers' invocation context
the order of handlers invocation must match the order of subscription
handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit
call - the handlers for an ongoing emit call should not be affected

subscribe, unsubscribe and emit are the only public properties that are allowed on event objects (apart from Object.prototype methods)

 */

export function Event() {
  let _store = []

  this.subscribe = (...fns) => {
    fns.filter(fn => typeof fn === 'function').forEach(fn => _store.push(fn))
  }

  this.emit = function(...args) {
    const self = this
    _store.forEach(function(fn) {
      fn.apply(self, args)
    })
  }

  this.unsubscribe = (...fns) => {
    fns.forEach((fn) => {
      const reverseFnOrder = _store.slice().reverse()
      const match = reverseFnOrder.findIndex(f => f === fn)
      if (match === -1) return
      _store = reverseFnOrder.slice(0, match).concat(reverseFnOrder.slice(match + 1)).reverse()
    })
  }
}

/**
 * Retrospective:
 *
 * This was a less pleasant kata, mostly because the description was poorly written and difficult to parse. The notion
 * of passing in the `emit` function's context didn't make sense for a long time because there's no good reason to
 * do it.
 */
