// import { render } from "@testing-library/react";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ClassCompo from "./ClassCompo1";
import Home1 from "./Home1";

const App1 = ()=>{
        return(
            <React.StrictMode>
            <h1>App Functional Component</h1>
            {/* <ClassCompo/> */}

            <Home1/>
            </React.StrictMode>
        )
}

export default App1