# Lesson Four - Promises

## What is a Promise?

Promises are usually vaguely defined as “a proxy for a value that will eventually become available”.
and offer an alternative to callbacks and events. You can chain a `.then` to a Promise that will 
be executed once the resources finish loading.

In this example, we are using the new `fetch` API, a modern simpler form of XHR requests introduced by 
the Chrome browser. This will make a simple request, but does not return the response. 

```javascript
fetch('https://swapi.co/api/');
```

In order to capture the response, we need to chain `.then` and return a callback:

```javascript
fetch('https://swapi.co/api/').then((response) => console.log(response));
```

## Error Handling

Handling errors within Promises works in one of two ways: you can use the `.catch` handler or as a second callback
in the `.then` block. In general, we tend to use the `.catch` handler. 

```javascript
fetch('https://swapi.co/api/')
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
```

## Callbacks and the Event Loop

Originally created for the browser, Javascript and Node run as single threaded processes. In order to 
keep things running smoothly, everything in Javascript runs asynchorously within a loop. This `Event Loop` 
is used to manage a call stack of functions within the scope of the application. Synchronous code is run 
immediately, where asynchorous code is added to a stack, for execution on subsequent ticks.

In this example, the first console log is executed synchronously. Then `console.log('B') is added to the 
stack for later execution. Immediately after, `console.log('C') is executed and finally `console.log('B')`
is executed.

Here, setTimeout is an example of a `callback`. A callback is a function that is added to the stack and then 
executed 

```javascript
const main = () => {
  console.log('A');

  setTimeout(() => console.log('B'), 0);

  console.log('C');
}

// Output
// A
// C
// B

## Anatomy of a Promise

```javascript
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
    // no error handling is required
  }
}

delay(3000).then(() => console.log('I waited 3 seconds');
```

### An Example with Error Handling

```javascript


const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
    // no error handling is required
  }
}

delay(3000).then(() => console.log('I waited 3 seconds');
```

## References
https://ponyfoo.com/articles/es6-promises-in-depth

