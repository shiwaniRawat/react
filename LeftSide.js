import React from  "react" ; 
import Classes from "./LeftSide.module.css" ;  
import BlueUser from "./assets/user-blue.png" 
import OrangeUser from "./assets/user-orange.png" 
import PinkUser from "./assets/user-pink.png" 
import RedUser from "./assets/user-red.png" 
import Arrow from "./assets/arrow-up.png"  
import BlueTick from "./assets/tick-blue.png" 
import GreyTick from "./assets/tick-gray.png" 
import Button  from './button'
import SmallDiv from  "./small" 
import RightSideBox from "./RightSide" ;
const LeftSide =()=>{

return(
    <div className={Classes.RightSidePageMain}>
    <div className={Classes.RightHeadingMain}>
      <h1>Stunning<br/> Workplace.</h1> 
      <p>With Stunning , remote teams can organize projects,<br/>
      manage shifting priorities , and get work done.</p> 
    </div>     
    <div className = {Classes.RightSideButtonsdiv}>
         <Button ClassName={Classes.NewAccBtn} text = "New Account"/>
         <img className = {Classes.RightSideImage} src={Arrow}></img>   
   </div> 
    <RightSideBox ClassName = {Classes.ext2} />
    <div className={Classes.RightBelowItemWrap} > 
     
         <SmallDiv ClassName={Classes.RightBelowContain} imgsrc={GreyTick} imgsrc2={PinkUser} SpanClass={Classes.belowHeading} SpanText="Dnm Design" btnClass={Classes.BelowBtn1} SpanText2 = "26 Dec"/>        
         <SmallDiv ClassName={Classes.RightBelowContain1} imgsrc={BlueTick} imgsrc2={OrangeUser} SpanClass={Classes.belowHeading} SpanText="Blur Animation" btnClass={Classes.BelowBtn2} SpanText2 = "22 Dec"/>
         <SmallDiv ClassName={Classes.RightBelowContain} imgsrc={GreyTick} imgsrc2={BlueUser} SpanClass={Classes.belowHeading} SpanText="Illustration" btnClass={Classes.BelowBtn3} SpanText2 = "20 Dec"/>
         <SmallDiv ClassName={Classes.RightBelowContain} imgsrc={GreyTick} imgsrc2={RedUser} SpanClass={Classes.belowHeading} SpanText="Refunds" btnClass={Classes.BelowBtn4} SpanText2 = "28 Dec"/>
    </div> 
    </div>
)


} 

export default LeftSide ; 