**Redux Middleware**

```
Redux itself follows a step-by-step synchronous process. It synchronously dispatches actions, updates the state via the root reducer and finally propagates data changes through the application. The action/reducer flow is great for updating the state of an application in a predictable manner.

Given that the code runs linearly, your reducers cannot contain side effects. According to Redux, a side effect is “any change to state or behavior that can be seen outside of returning a value from a function.” However, at times, we may need to run side effects without disrupting this flow.

For example, what if we want to send an API request or perform some very expensive operation with a background worker? These are asynchronous operations and don’t fit into the flow that Redux has. Most real-world applications require some asynchronous operation to occur (HTTP requests, saving files, etc.), so how do we incorporate them with Redux?

When finding yourself in this situation, attempting to do some asynchronous process with Redux, middleware can come in handy. Let’s take a look at what middleware is.

What Does Middleware Do?
With middleware, you are able to intercept a dispatched action before it reaches the reducer. This allows you to make changes to the action or just cancel the action altogether. These changes that you can make are the side effects that you are trying to incorporate.

Each middleware can be thought of as a layer of code that runs right after you’ve dispatched a Redux action but before the reducer gets executed. Using the concept of promises in Javascript, you’re able to run asynchronous code within the Redux action/reducer flow.

In order to better understand what this means, let’s talk about the flow Redux goes through with and without middleware.

How Redux Executes Middleware
Without any middleware, whenever you call a Redux action, the data will go through this flow:

Some event occurs on your application
An action is dispatched as a result
Reducer creates a new state based on data passed through the action
The new state is passed back into the React app via props and selectors

Keep in mind, all of the code that runs this process is synchronous, meaning that it runs on the client’s computer and the code runs step-by-step. There’s no way to change or cancel an action once it’s been dispatched.

Now, let’s look at the flow when the middleware is used:

Some event occurs on your application
An action is dispatched as a result
Middleware receives the action and returns the next action
Reducer creates a new state based on data passed through the action
The new state is passed back into the React app via props and selectors

With this flow, you are able to run your own code before the reducer gets the final data that it uses to generate the next state. You are also able to completely cancel the action from reaching the reducer as well.

Your code can run whatever asynchronous operation that it needs to run as long as it returns another function for the next middleware or reducer to process.

Benefits of Middleware
The main problem that middleware solves is being able to run some piece of code between the action and reducer, allowing you to perform asynchronous operations. In solving this problem, utilizing middleware in your project brings the following benefits:

Write Maintainable Code — With each layer of middleware, you can split responsibilities in a scalable manner. Each layer is only responsible for one thing. For example, one layer could be just for logging actions, another just to check cached data and so on.

Flow Control — Since you know the order of when each middleware will be executed, you can easily control the flow of actions coming into your application. For example, you could have a middleware layer to make sure a user is logged in with an additional layer to check if the user has permission to run a particular action.

Make Debugging Easier — Since you only write your logic code once in a middleware layer, you can confidently debug programs and make sure that things will work how they should.
```

**Applying Middleware to Redux**

```
Whenever we want to use middleware, whether it be a third-party library or your own code, Redux provides us with an API function called applyMiddleware which allows us to use middleware.

For example, if we wanted to use redux-thunk with Redux, we would have to initialize our Redux store in the following manner:

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));
```
