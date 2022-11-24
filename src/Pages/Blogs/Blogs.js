import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-14'>
            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    What are the different ways to manage a state in a React application?
                </h3>
                <p>
                    The Four Kinds of React State to Manage <br />
                    Local state, Global state, Server state, URL state.
                </p>
            </div>

            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    How does prototypical inheritance work?
                </h3>
                <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </div>

            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    What is a unit test? Why should we write unit tests?
                </h3>
                <p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>

            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    What are the difference between React js. Angular js. Vue?
                </h3>
                <p>
                    React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.
                </p>
            </div>
        </div>
    );
};

export default Blogs;