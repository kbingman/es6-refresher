# Lesson 3 - Arrow Functions

ES6 introduced a new format for functions, derived from the popular library, Coffeescript. 
These so-called `arrow functions` behave almost exactly, but not quite like normal Javascript 
functions. They differ in two important ways: they do not have an `arguments` keyword, giving them 
access to any arbitrary arguments passed into the function and they do not have their own `context`. 

The `arguments` keyword is a useful shorthand for getting all arguments of a function without defining them 
in the function signature. Should you ever need access to the arguments without knowing their names, you 
can use the Array spread operator. More on this later.

Context refers to `this`, one of the more confusing aspects of Javascript. Unlike other languages, the 
value of `this` varies depending on the context of the calling function. You may have seen 
`var self = this` before, one of the more popular ways of redeclaring this to be sure of its current value. 

Imagine a function with several attached methods. 

```javascript
var bunny = {
  name: 'Usagi',
  showName: function() {
    console.log(this.name);
  }
};

bunny.showName(); // Usagi
```

But now if you need to call a method from within a callback, the value of `this` will be incorrect. 

```javascript
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      console.log(this.name + ' wants to ' + task);
    });
  }
};

bunny.showTasks();
// undefined wants to transform
// undefined wants to eat cake
// undefined wants to blow kisses

```

The old way to mitigate the changing nature of `this` was to cache it with `self` or `that` 

```javascript
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    var self = this;
    self.tasks.forEach(function(task) {
      console.log(self.name + ' wants to ' + task);
    });
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses

```
If we change the function within the `forEach` function to the new arrow syntax, we can avoid the
the retain the value of `this` to be the Class itself. 

```javascript
  const  bunny = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: () => {
      this.tasks.forEach((task) => {
        console.log(self.name + ' wants to ' + task);
      });
    }
  };

  bunny.showTasks();
  // Usagi wants to transform
  // Usagi wants to eat cake
  // Usagi wants to blow kisses
```

