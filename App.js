// const heading = React.createElement("h1", { id: "myid" }, "Hello From React");
// console.log(heading);

const jsxHeading = <h1 id="jsxid">Hello from JSX</h1>
console.log(jsxHeading)

const root = ReactDOM .createRoot(document.getElementById("root"));
root.render(jsxHeading)

