import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import App1 from "./App1";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        {/* <h1>HELLO WORLD!!</h1> */}
        <App /> 
    </React.StrictMode>
)

// let element = React.createElement("h1", {id:"head"}, "HEADING ONE!!!",
//     React.createElement("h2", {className:"head"}, "HEADING TWO"),
//     React.createElement("button", null, "Submit")

// )

// ReactDOM.render(element, document.getElementById("root"))