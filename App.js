import React from 'react';
import './App.css';
import TopBar from "./TopBar"
import Classes from "./app.module.css" 
import LeftSideBox from  "./LeftSide" ; 
import RightSideBox from "./RightSide"

function App() {
  return (
    // beem
    <div className="app">
    <TopBar/>
       <div className = {Classes.LandingPageWrap}>
         <LeftSideBox/>
         <RightSideBox ClassName = {Classes.Extraeffort}/>
      </div>
    {/* <h1>app</h1> */}
    </div>
  );
}

export default App;
