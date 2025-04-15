import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");

const HeadingComponent = () => {
  return (
    <h1 id="heading">Hello world from React!</h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
