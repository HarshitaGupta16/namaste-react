# npx parcel index.html

- this command means executing a npm package parcel and give a source file as index.html

# Notes

- React Elements are like DOM elements
- When we render React.createElement on to the DOM, it becomes a React Element

- JSX is not a part of React
- JSx is a different syntax

- JS Engines or Browsers doesn't understand JSX. They understand ES6 or EcmaScript

- The code is transpiled before it goes to JS engine then JS engine receives the code that browsers can understand

- Transpilation is done by babel. Babel gets instruction from parcel
- Babel transpiles JSX code to React.createElement
- JSX => React.createElement => React Element - JS Object - HTMLElement(render)
- Attributes in JSX are camelCase

## React Components:-

- Class Based Components
- Functional Based Components

Functional Component - A Javascript function which returns a React Element
or a function returning some piece of JSX is a func component

# JSX

- Help avoiding cross site attacks
- if some API is sending mallacious data and that data is being rendered in the component,
  then JSX skips that mallacious data, it sanitizes the data
- Anything inside curly braces - JSX sanitizes it
- JSX can have single parent on the root
- React Fragment acts as a empty tag - To avoid multiple parent problem - React provides this as a solution
- JSX increases readability of React code
- JSX is making web app code readable
- Parcel is a beast
