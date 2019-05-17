# Lesson Four - Async / Await

## The Async Keyword

Async / Await is an alternative syntax for hgandling Promises. Using the `async` keyword on a function signifying 
that it returns a Promise. Even if the function returns a non-promise value, that value will be wrapped in a function.

```javascritpt 
async function f () {
  return 1;
}

f().then(result => console.log(result)); // 1
```

## The Await Keyword
The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:

```javascript
async function f() {

  const promised = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  const result = await promised; // wait till the promise resolves (*)

  console.log(result); // "done!"
}
```
The function execution "pauses" at the line () and resumes when the promise settles, with result becoming 
its result. So the code above shows "done!" in one second.

Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. 
That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, 
handle events etc.

It’s just a more elegant syntax for getting the promise result than `promise.then`, easier to read and write.

## Async / Await using `fetch` 

```javascritpt
const fetchPlanets = async () => {
  const response = await fetch('https://swapi.co/api');
  return await response.json();
};
```

Be aware, you can’t use await in regular functions

## Error Handling

```javascritpt
const fetchPlanetsiWithError = async () => {
  try {
    const response = await fetch('https://swapi.co/api');
    return await response.json();
  } catch (err) {
    console.log(err);
    return {
      error: err.message
    }
  }
};
```
