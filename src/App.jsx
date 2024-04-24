// import { render } from "@testing-library/react";
import React from "react";
// import Nav from "./Nav";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Props1 from "./Props/Props1";
// import Props2 from "./Props/Props2";
// import Parent from "./Props/Parent";
// import PropsDes2 from "./Props/PropsDes2";
// import PropsDes1 from "./Props/PropsDes1";
// import Props3 from "./Props/Props3";
// import { Props5 } from "./Props/Props5";
// import Props7 from "./Props/Props7";
// import { DefProps } from "./Props/DefProps";
// import State1 from "./States/State1";
// import State2 from "./States/State2";
// import State3 from "./States/State3";
// import State4 from "./States/State4";
// import { FunctionalClick } from "./Event/FunctionalClick";
// import ClassClick from "./Event/ClassClick";
// import ClassBind from "./Event/ClassBind";
// import { App1 } from "./Task1/App1";
// import { Player } from "./Assignment1/Player.jsx";
// import { User } from "./Event/User.jsx";
// import { NameList } from "./List Rendering/NameList.jsx";
// import { PersonList } from "./List Rendering/PersonList.jsx";
// import { ListItem } from "./List Rendering/ListItem.jsx";
// import { ParentComp } from "./List Rendering/ParentComp.jsx";
// import { Wrapped } from "./Assignment4/Wrapped.jsx";
// import Main from "./Spinner/Main.jsx";
// import { Employee } from "./Assignment3/Employee.jsx";
// import { KeyRend } from "./List Rendering/KeyRend.jsx";
// import External from "./Style/External.jsx";
// import External1 from "./List Rendering/External1.jsx";
// import Inline from "./Style/Inline.jsx";
// import Inline1 from "./Style/Inline1.jsx";
// import Module from "./Style/Module.jsx";
// import Cond1 from "./Conditional Rendering/Cond1.jsx";
// import Cond2 from "./Conditional Rendering/Cond2.jsx";
// import Cond3 from "./Conditional Rendering/Cond3.jsx";
// import User2 from "./Event/User2.jsx";
// import Form1 from "./Controlled Components/Form1.jsx";
// import Form2 from "./Controlled Components/Form2.jsx";
// import Comp1 from "./Context Api/Comp1.jsx";
// import CompA from "./Context Api/CompA.jsx";
// import RegForm from "./Project/RegForm.jsx";
// import HOC1 from "./HOC/HOC1.jsx";
// import OnClick from "./HOC/OnClick.jsx";
// import OnMouseOver from "./HOC/OnMouseOver.jsx";
// import { OnMouseUp } from "./HOC/OnMouseUp.jsx";
// import Ref1 from "./Refs/Ref1.jsx";
// import Ref2 from "./Refs/Ref2.jsx";
// import Ref3 from "./Refs/Ref3.jsx";
// import Ref4 from "./Refs/Ref4.jsx";
// import ParentMemo from "./Memp Comp/ParentMemo.jsx";
// import GetData from "./HttpRequest/GetData.jsx";
// import CompoLifeA from "./Comp LifeCycle/CompoLifeA.jsx";
import CompoLifeB from "./Comp LifeCycle/CompoLifeB.jsx";
import CompoLifeC from "./Comp LifeCycle/CompoLifeC.jsx";
import PostData from "./HttpRequest/PostData.jsx";
import CompoLifeE from "./Comp LifeCycle/CompoLifeE.jsx";
import CompoLifeF from "./Comp LifeCycle/CompoLifeF.jsx";
import ComUnmount2 from "./Comp LifeCycle/ComUnmount2.jsx";
import Parent from "./Comp LifeCycle/Parent.jsx";
import ParentImg from "./Task/ParentImg.jsx";
import Progress from "./Task/Progress.jsx";
import UseState1 from "./Hooks/UseState1.jsx";
import UseState2 from "./Hooks/UseState2.jsx";
import UseState3 from "./Hooks/UseState3.jsx";
import UseState4 from "./Hooks/UseState4.jsx";
import UseState5 from "./Hooks/UseState5.jsx";
import UseEffect1 from "./Hooks/UseEffect1.jsx";
import UseEffect2 from "./Hooks/UseEffect2.jsx";
import UseEffect3 from "./Hooks/UseEffect3.jsx";
import UseEffect4 from "./UseEffect4.jsx";
import UseEffect5 from "./Hooks/UseEffect5.jsx";
import UseCounter from "./List Rendering/UseCounter.jsx";
import UseEffData1 from "./Hooks/UseEffData1.jsx";
import GetData from "./HttpRequest/GetData.jsx";
import { Github } from "./Project1/Github.jsx";
import CompoLifeA from "./Comp LifeCycle/CompoLifeA.jsx";
import Login1 from "./ProjectReact/Login1.jsx";
import AdmitionForm from "./ProjectReact/AdmissionForm.jsx";
import UseCont1 from "./Hooks/Compenents/UseCont1.jsx";

const App = () => {
    return (
        <React.StrictMode>
            {/* <h1>App Funstional Component</h1>
            <Nav/>
            <Home/>
            <About/>
            <Contact/> */}
            {/* <Props1/>
            <Props2 name="pallavi"/> here we are assigning the property and inside Props2 (React Based Component) we are accessing it */}
            {/* <Parent/> */}
            {/* <PropsDes1/> */}
            {/* <Props3/> */}
            {/* <Props5/> */}
            {/* <Props7/> */}
            {/* <DefProps name="ramesh"/> */}
            {/* <State1/> */}
            {/* <State2/> */}
            {/* <State3 user="sakshi"/> */}
            {/* <State4/> */}
            {/* <FunctionalClick/> */}
            {/* <ClassClick/> */}
            {/* <ClassBind/> */}
            {/* <App1/> */}
            {/* <Player/> */}
            {/* <NameList/> */}
            {/* <PersonList/> */}
            {/* <ListItem/> */}
            {/* <ParentComp/> */}
            {/* <User isLogin ={true}/> */}
            {/* <Wrapped/> */}
            {/* <Wrapped/> */}
            {/* <Main/> */}
            {/* <Employee/> */}
            {/* <KeyRend/> */}
            {/* <External/> */}
            {/* <External1 primary={false}/> */}
            {/* <Inline/> */}
            {/* <Inline1/> */}
            {/* <Cond1/> */}
            {/* <Cond2/> */}
            {/* <Cond3/> */}
            {/* <User2/> */}
            {/* <Module/> */}
            {/* <Form1/> */}
            {/* <Form2/> */}
            {/* <Comp1/> */}
            {/* <CompA/> */}
            {/* <RegForm/> */}
            {/* <HOC1/> */}
            {/* <OnClick/>
            <OnMouseOver/>
            <OnMouseUp/> */}
            {/* <Ref1/> */}
            {/* <Ref2/> */}
            {/* <Ref3/> */}
            {/* <Ref4/> */}
            {/* <ParentMemo/> */}
            {/* <GetData/> */}
            {/* <PostData/> */}
            {/* <CompoLifeA/> */}
            {/* <CompoLifeB/> */}
            {/* <CompoLifeC/> */}
            {/* <PostData/> */}
            {/* <CompoLifeE/> */}
            {/* <CompoLifeF/> */}
            {/* <ComUnmount2/> */}
            {/* <Parent/> */}
            {/* <ParentImg/> */}
            {/* <Progress/> */}
            {/* <UseState1/> */}
            {/* <UseState2/> */}   
            {/* <UseState3/> */}
            {/* <UseState4/> */}
            {/* <UseState5/> */}
            {/* <UseEffect1 /> */}
            {/* <UseEffect2/> */}
            {/* <UseEffect3/> */}
            {/* <UseEffect4/> */}
            {/* <UseEffect5/> */}
            {/* <UseCounter/> */}
            {/* <UseEffData1/> */}
            {/* <Github/> */}
            {/* <Login1/> */}
            {/* <AdmitionForm/> */}
            <UseCont1/>
        </React.StrictMode>

    )
}
export default App