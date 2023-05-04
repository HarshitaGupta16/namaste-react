# Two Types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# State

Whenever a state variable updates, react re-renders the component
That is why it is a super powerful variable

React keeps data layer in sync with UI Layer

# Reconcliation Algorithm (React Fiber)

React uses Reconciliation algorithm
React creates a virtual DOM

# Virtual DOM

Representaion of actual DOM in the form of an object.

Actual DOM:

<div><h1></h1></div>

Virtual DOM: It is a normal javascript Object
Try console.log(<Component />)
Component or any React.createElement

# Diff Algorithm

- It finds out the difference between the updated Virtual DOM and previous virtual DOM

React Fiber is a new way of finding the div and updating the DOM

As it follows Diff Algo, it does not touch DOM, it just compares the 2 objects
that suppose previously there were 15 restaurants now there are 7 so it just compares and updates that part of DOM.
That is why React is fast.

We need a trigger to start to diff algorithm and update the UI that is why second function is created in useState()
when we call this second function, it will automatically re-render the component.
