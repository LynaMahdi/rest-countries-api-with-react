import React, { useState,useEffect } from "react";
import './all.css'
import Filter from "./filter-region";
import { Link } from "react-router-dom";
function All({setChosedCountry}){


    const [countries,setCountries]=useState([])
    const url='https://restcountries.com/v3.1/all'

    const [searched,setSearched]=useState("")
    
 
    const fetchCountries = async () => {
        const response = await fetch(url)
        const countries = await response.json()
         setCountries(countries)
      }
  
    
  
  useEffect(() => {
   fetchCountries()
  }, [])


    return(
        
    <div id="all">  


    <div id="Search-bar" className="Search-bar">
        <input id="input" className="input" type='search' placeholder='Search for a country...' onChange={(e)=>{setSearched(e.target.value)}}  />
    </div>


   <Filter setCountries={setCountries} />
   
    {searched.length>=1?

     <div id="bloc" className="bloc">
     {countries.filter(country => country.name.common.toLowerCase().includes(searched)).map((country)=>{
         const {id,name,capital,flags,population,region}=country
         return( 
        <Link to={`/country/${country.name.common}`} >
           <article id="grid" key={id} className="grid-item" onClick={console.log(country.name.common)}>
             <div className="drapeau">
                 <img className="drapeauIm" src={flags.png} alt={flags.alt} />
             </div>
             <div className="info">    
                 <h1 className="T">{name.common}</h1>
                 <h>Population: {population}</h>
                 <h>Region: {region}</h>
                 <h>capital:  {capital}</h>
                 
             </div>
          </article>
         </Link>
         )
     })}
    </div>

     :
     
     <div id="bloc" className="bloc">
        {countries.map((country)=>{
            const {id,name,capital,flags,population,region}=country
            return( 
           <Link  to={`/country/${country.name.common}`}>
              <article id="grid" key={id} className="grid-item"  >
                <div className="drapeau">
                    <img className="drapeauIm" src={flags.png} alt={flags.alt} />
                </div>
                <div className="info">    
                    <h1 className="T">{name.common}</h1>
                    <h>Population: {population}</h>
                    <h>Region: {region}</h>
                    <h>capital:  {capital}</h>
                    
                </div>
             </article>
            </Link>
            )
        })}
    </div>}
    

   
    </div>  
    );
}

export default All;