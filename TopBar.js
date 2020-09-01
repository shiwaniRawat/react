import React  from 'react' 
import Classes from "./TopBar.module.css" 
import StunningLogo from './assets/stunning-logo.png'
import Button from "./button"
import "./App.css"
const TopBar =()=>{

 return(
    <div className={Classes.TopBar}> 

    <img className={Classes.StunningLogo} src = {StunningLogo}></img> 
    <div className={Classes.TopBarItem}>
       <span className={Classes.TopBarspan}>Home</span>
       <span className={Classes.TopBarspan}>About</span>
       <span className={Classes.TopBarspan}>Blog</span>
       <span className={Classes.TopBarspan}>Jobs</span>
    </div>  
  <Button ClassName={Classes.TopBarButton} text = "Your Account"/> 
  <i class ="fas fa-bars" ></i>
  </div>


 )


} 


export default TopBar ; 