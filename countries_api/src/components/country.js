import React , {useEffect, useState} from "react";
import './country.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
function Country({chosedCountry}){
    const [info , setInfo]=useState([])
    let {choosedCountry} = useParams();
    let i;

    const fetchCountry=async()=>{
        const url=`https://restcountries.com/v3.1/name/${choosedCountry}`
        const response= await fetch(url)
        const countryInfo=await response.json()
        setInfo(countryInfo)
        console.log(url)

    }


    useEffect(()=>{
        fetchCountry()
    },[])
    
    console.log(info["name"])

return(

    <>
      <Link to='/' className="back">
        <FaArrowLeft className="arrow"/>
        <h5>Back</h5>

      </Link>

      {info.map((country, index) => (
        <div className="info_container" >
          <div className="image__info">
            <img className="imgI" src={country.flags.png} alt="" />
          </div>

          <div className="details">
            <h6>{country.name.common}</h6>
            <div className="detail-bloc">
          
                <div className="detail-grid">
                    <h7>Population: {country.population}</h7>
                </div>
                <div className="detail-grid">
                    <h7>Capital: {country.capital}</h7>
                </div>
                <div className="detail-grid">
                    <h7>Region: {country.region}</h7>
                </div>
                <div className="detail-grid">
                    <h7>Top Level Domain: {country.tld}</h7>
                </div>
               
                <div className="detail-grid">
                    <h7>Sub Region: {country.subregion}</h7>
                </div>
                
                
               
                
            </div>
          </div>
        </div>
          ))}
    </>
)

}

export default Country