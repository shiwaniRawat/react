import React from 'react' ; 
import Classes from "./RightSide.module.css" ; 
import Mainimg from './assets/landing-section-image.png' 

const RightCont = (props)=>{
 return(
    <div className ={`${Classes.LeftSideMain} ${props.ClassName}`}>
    <img src = {Mainimg}></img> 
    </div> 
 )

} 




export default RightCont ;  