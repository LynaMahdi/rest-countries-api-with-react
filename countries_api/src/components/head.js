import React,{useState} from "react";
import './head.css'
import moon from '.././moon-solid.svg'
import sun from '.././icon-sun.svg'

function Head(){

    const [light,setLight]=useState(false)

    function change(){
        const items=document.querySelectorAll(".grid-item")
        const texts=document.querySelectorAll("h , h1")
        
        if (light==true){
            setLight(false)
            document.getElementById("cc").style.backgroundColor="hsl(209, 23%, 22%)"
            document.getElementById("title").style.color="white"
            document.getElementById("title").style.backgroundColor="hsl(209, 23%, 22%)"
            document.getElementById("bloc").style.backgroundColor="hsl(207, 26%, 17%)"
            document.getElementById("input").style.backgroundColor="hsl(209, 23%, 22%)"
            document.getElementById("all").style.backgroundColor="hsl(207, 26%, 17%)"
            document.querySelector("body").style.backgroundColor="hsl(207, 26%, 17%)"
            document.querySelector("select").style.backgroundColor="hsl(207, 26%, 17%)"


            
            items.forEach((item) => {
                item.classList.toggle("grid-change")
              })

            texts.forEach((text)=>{
                text.classList.toggle("grid-change")
            })  
            
        }else{
            setLight(true)
            document.getElementById("cc").style.backgroundColor="white"
            document.getElementById("input").style.backgroundColor="white"
            document.getElementById("title").style.backgroundColor="white"
            document.getElementById("title").style.color="hsl(209, 23%, 22%)"
            document.getElementById("bloc").style.backgroundColor="hsl(0, 0%, 98%)"
            document.getElementById("all").style.backgroundColor="hsl(0, 0%, 98%)"
            document.querySelector("body").style.backgroundColor="hsl(0, 0%, 98%)"

            document.querySelector("select").style.backgroundColor="hsl(0, 0%, 98%)"


            items.forEach((item) => {
                item.classList.toggle("grid-change")
              })
            texts.forEach((text)=>{
                text.classList.toggle("grid-change")
            })  
        }

       
    }
    
  

    return(
      <body>
        <div id="cc" className="Container">
             <h2 id="title">Where in the world?</h2>
             {light? <><img  className="lightt" onClick={change} src={moon}/><h4> Dark Mode</h4></>:<><img  className="lightt"  onClick={change} src={sun}/><h3 id="cc">Light Mode</h3></>}
        </div>    
      </body>  
    );
} 


export default Head;