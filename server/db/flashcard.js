const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  name: String,
  deck: []
});

const Flashcards = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcards;

/*
  const example = {
    name: 'sorting algorithims',
    deck: [
      {
        id: 1,
        front: 'quick sort',
        back:
          'Set a pivot; all elements smaller than pivot go to left, all elements larger than pivot go to right'
      },
      {
        id: 2,
        front: 'selection sort',
        back:
          'Select smallest element in array and swap it with the element in the zeroth position'
      },
      {
        id: 3,
        front: 'insert sort',
        back: 'Iterate through array, add each element to another sorted list'
      },
      {
        id: 4,
        front: 'shell sort',
        back: 'Sort using gaps; once list is iterated through, decrease gap'
      },
      {
        id: 5,
        front: 'merge sort',
        back:
          'Divide and conquer; when combining, check individual elements against each other'
      },
      {
        id: 6,
        front: 'bucket sort',
        back: 'Divide array into buckets; sort buckets individually and combine'
      },
      {
        id: 7,
        front: 'radix sort',
        back: 'Sort by digit, least significant first'
      }
    ]
  };



  const example = {
    name: 'JS fundamentals',
    deck: [
      {
        id: 1,
        front: 'prototypical inheritance',
        back:
          'Inheritance works in JavaScript using a prototypes instead of classes. Every object in JavaScript has a prototype object and may inherit methods and properties from this prototype.'
      },
      {
        id: 2,
        front: 'use strict;',
        back: `This syntax is used to opt in to a restricted variant of JavaScript (strict mode) that changes certain semantics of normal code:

          Eliminates some silent errors by changing them to throw errors.
          Fixes mistakes that make it difficult for JavaScript engines to perform optimizations
          Prohibits some syntax likely to be defined in future versions of ECMAScript.`
      },
      {
        id: 3,
        front: 'primitive types',
        back:
          'In JavaScript, there are six primitive data types: string, number, boolean, null, undefined, and symbol.'
      },
      {
        id: 4,
        front: 'this',
        back:
          'The this property refers to the enclosing context of its invocation and made include a function, object, or global context, wherever it is invoked.'
      },
      {
        id: 5,
        front: 'prototype chain',
        back:
          'A prototype chain describes the inheritance pattern in JavaScript where an object’s prototype has its own prototype object which may have its own prototype object and on and on. This link of prototypes forms a chain.'
      },
      {
        id: 6,
        front: 'arrow functions',
        back:
          'Arrow functions are a shorter syntax for a function expression and does not have its own context. They are best suited for non-method functions.'
      },
      {
        id: 7,
        front: 'block scope',
        back:
          'Block scope describes when variables declared in a block are not visible outside of that block. JavaScript used block syntax but does not provide block scope. ES6 introduces a solution with let and const.'
      },
      {
        id: 8,
        front: 'undefined',
        back:
          'The undefined keyword is used to indicate a value is not currently present.'
      },
      {
        id: 9,
        front: 'closure',
        back:
          'A closure is the combination of a function and the lexical environment within which that function was declared. It is the inner function that has access to the parent function’s variables and makes it possible for useful patterns like emulating private functions.'
      },
      {
        id: 10,
        front: 'scope',
        back:
          'Scope is the context of program execution. The context where values or expressions are “visible” and can be referenced. If a variable is not in the current scope, it cannot be used.'
      },
      {
        id: 11,
        front: 'JSON',
        back:
          'JSON (JavaScript Object Notation) is a lightweight data-interchange format based on a subset of the JavaScript language.'
      },
      {
        id: 12,
        front: 'new',
        back:
          'The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.'
      },
      {
        id: 13,
        front: 'object',
        back:
          'An object is a collection of properties. A set of properties are initialized in an object and can be added or removed.'
      },
      {
        id: 14,
        front: 'constructors',
        back:
          'Constructors are special methods for creating and initializing an object created within a class.'
      },
      {
        id: 15,
        front: 'arguments',
        back:
          'The arguments property refers to an array-like object corresponding to the arguments passed to a function.'
      },
      {
        id: 16,
        front: 'high order functions',
        back:
          'Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.'
      }
    ]
  };



    const example = {
    name: 'JS interview questions',
    deck: [
      {
        id: 1,
        front: 'What are the advantages of immutability?',
        back:
          "Immutability improves performance. It eliminates planning for the object's future changes. Immutability reduces memory use. It makes object references instead of cloning the whole object. Immutability provides thread-safety. Multiple threads can reference the same object without interfering with one other."
      },
      {
        id: 2,
        front: 'What are Promises?',
        back: `Promises allows asynchronous methods return values like synchronous methods and are typically used for writing asynchronous programs (network requests, I/O). A pending promise can either be fulfilled with a value, or rejected with a reason (error).Promises are slightly more complex code (debatable). Browser-support for promises might not be universal.`
      },
      {
        id: 3,
        front: 'How can you make a single page app SEO-friendly?',
        back:
          'Single page apps depend on Javascript to render content which can hurt search engine performance. You can overcome it by rendering the application on the server-side first before sending it to the browser.'
      },
      {
        id: 4,
        front: 'What is JSONP?',
        back: `JSONP (JSON with Padding) is a method used to bypass the cross-domain policies in browsers because Ajax requests from the current page to a cross-origin domain is not allowed. JSONP works by making a request to a cross-origin domain via a <script> tag and usually with a callback query parameter.`
      },
      {
        id: 5,
        front: 'What are the disadvantages of using Ajax?',
        back: `TThere are issues with SEO as web crawlers might have trouble loading a page. Supporting Ajax can also be an issue for browser-compatibility since it depends on JavaScript`
      },
      {
        id: 6,
        front: 'What is the same-origin policy?',
        back: `The same-origin policy prevents JavaScript from making requests across domain boundaries. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page.`
      },
      {
        id: 7,
        front: `When would you use the document's load event?`,
        back: `The load event fires at the end of the document loading process when all of the objects, images, scripts, and links are loaded. It is used to delay the execution of a program until all necessary resources are ready.`
      },
      {
        id: 8,
        front: 'When would you use a closure?',
        back: `Closures are commonly used for data privacy /emulating private methods, and partial applications or currying.`
      },
      {
        id: 9,
        front: 'What is the difference between == and ===?',
        back: `== is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing any necessary type conversions. The === operator will not do type conversion. Using === is preferred.`
      },
      {
        id: 10,
        front: 'What is event delegation',
        back: `is a technique of handling events at a higher level in the DOM than where the element where they originated. Event listeners are added to a parent element and will be triggered due to the event propagating up the DOM.`
      },
      {
        id: 11,
        front: 'What is object destructing?',
        back: `Object destructuring is JavaScript syntax that provides support for unpacking values from arrays, or properties from objects, into distinct variables.`
      },
      {
        id: 12,
        front: 'What is Ajax?',
        back: `TAjax is a web technology that allows applications to send data to and retrieve from a server without interfering with the behavior of the current page. It stands for Asynchronous JavaScript and XML.`
      },
      {
        id: 13,
        front: 'How does the this keyword work in JavaScript?',
        back: `It is a keyword that usually refers to the context where it is invoked and is determined at the time it is invoked. It can also be passed as an argument to a function using apply, call, or bind.`
      },
      {
        id: 14,
        front: 'What is the event loop?',
        back: `The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue.`
      },
      {
        id: 15,
        front: 'What is a curry function?',
        back: `Currying is a pattern where a function with more than one parameter is broken into multiple functions that, when called in series, will accumulate all of the required parameters one at a time. It can be helpful for making code easier to read and compose.`
      },
      {
        id: 16,
        front: 'What is a ternary expression?',
        back: `A ternary expression is a special type of conditional that accepts three operands: the test condition, the "then" expression and the "else" expression.`
      },
      {
        id: 17,
        front: 'What is the difference between sync/async functions?',
        back: `Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run.`
      },
      {
        id: 18,
        front: 'What is a higher-order function?',
        back: `A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and returns a function as a result. Higher-order functions are meant to abstract some operation that is performed repeatedly.`
      },
      {
        id: 19,
        front: 'What are the advantages of using spread syntax?',
        back: `ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to Object.create, slice, or a library function.`
      },
      {
        id: 20,
        front: 'What is "variable hoisting"?',
        back: `Hoisting describes how variables declared with the var keyword will have their declaration "moved" up to the top of the current scope. Only the declaration is hoisted, the assignment will stay where it is.`
      },
      {
        id: 21,
        front: 'What is event bubbling?',
        back: `Event bubbling describes how an event is triggered on a DOM element (like a button) and is passed up to the DOM, triggering any event listeners. This bubbling starts at the most nested element and passes up the element's ancestors all the way to the document.`
      },
      {
        id: 22,
        front: 'When would you create static class members?',
        back: `Static class members (properties/methods) are not tied to a specific instance of a class and have the same value regardless of which instance is referring to it. Static properties are typically configuration variables and static methods are usually pure utility functions which do not depend on the state of the instance.`
      },
      {
        id: 23,
        front: 'When would you use anonymous functions?',
        back: `They can be used to 1) encapsulate some code within a local scope, 2) as a callback that is used only once, or 3) as arguments to functional programming constructs.`
      }
    ]
  };

  */
