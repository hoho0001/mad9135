# Mocha and Chai

## What is Mocha

Mocha is a testing framework for JavaScript Applications. It can be run from the command line with NodeJS or through a browser.

[Mochajs.org website](https://mochajs.org/)

It is often used in conjunction with some other assertion library like Chai.

[ChaiJS website](http://chaijs.com/api/bdd/)

There are many other assertion libraries that you can use. There are also many other testing frameworks that you can use. The important thing is that you make testing part of your development process. 

There are many acronyms that you will see when it comes to this process TDD - Test Driven Design and BDD - Behaviour Driven Design are two common ones. They both refer in general to a system where you write new JavaScript test functions that will call the functions that make up your application. The test functions will pass different types of data to your functions and expect to get a specific result or data type of result back from the function.

Mocha is the framework for defining your lists of tests that you want to run. It handles calling the test functions and reporting the results.

The assertion library (in our case Chai) will be used inside the test functions to validate the results that come back from your own application functions.

## Why do we use Mocha

The reason for using test frameworks like Mocha is primarily to ensure that your code works as expected and that you are handling your errors properly. 

However, there is another more subtle but equally important purpose for test driven design. It forces you to write better functions. You have to think about how your functions are going to be used within the scope of your whole application. You will start to make functions that are pure - functions that have no or very limited side effects. You will begin to think of your functions more as objects that transform your data from one state to another. When you want to manipulate your interface you will start to put those tasks into their own functions and isolate them from functions that manipulate your data.

## References

Funfunfunction video on why and how we do unit tests
[funfunfunction unit test video](https://www.youtube.com/watch?v=TWBDa5dqrl8)

FunFunFunction video on comparison between integration Testing and Unit Testing
[funfunfunction integration vs unit tests video](https://www.youtube.com/watch?v=vqAaMVoKz1c)

YouTube video on setting up and running Mocha with Chai from the command line.
[Steve's Mocha and Chai video](https://youtu.be/qxE1D5qbQJU)

[Pluralsight course on Mocha](https://app.pluralsight.com/library/courses/mocha-javascript-testing-nodejs/table-of-contents)
