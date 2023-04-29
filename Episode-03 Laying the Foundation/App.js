import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const Title = () => {
  return <h1>Title</h1>;
};

// Multiline JSX will be put inside paranthesis
// React Element
const jsxHeading = (
  <h1 className="heading" tabIndex={1}>
    Namaste React Using JSX 🚀
    {elem}
    {/* can put Functional component inside React element */}
    <Title />
  </h1>
);

console.log(jsxHeading); //object

// React Functional Component
const HeadingComponent = () => {
  return <h1 className="heading">Namaste React from functional Component</h1>;
};

// Component Composition - putting one component inside other component
const HeadingComponent2 = () => (
  <div>
    <Title />
    {/* normal js variable or react element inside JSX */}
    {jsxHeading}
    <h1 className="heading">
      Namste React Functional Component without return
    </h1>
    {/* call a functional component like this too */}
    {Title()}
  </div>
);

// React Fragment
const ParentComponent = () => (
  //   <React.Fragment>
  <>
    <div id="container1">Hello</div>
    <div id="container2">Hi</div>
  </>
  //   </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);

// Assignment
// Can we have multiple root.render()? - can have but only the last root.render result will be shown
// other will be overwritten
// so we should always keep single component to be rendered in the root.
root.render(<HeadingComponent />);
