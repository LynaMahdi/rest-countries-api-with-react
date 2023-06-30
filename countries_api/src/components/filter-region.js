import './filter-region.css'
import React ,{ useState ,useEffect} from 'react'



function Filter({setCountries}){
    
    const url='https://restcountries.com/v3.1/region/'
    const [Region,setRegion]=useState("all")

    const Regions = [
        {reg:'Africa'},
        {reg:'America'},
        {reg:'Asia'},
        {reg:'Europe'},
        {reg:'Oceania'}]

    
        const fetchRegions = async (Regin) => {
            const response = await fetch(`https://restcountries.com/v3.1/region/${Regin}`)
            const region = await response.json()
            setCountries(region)
            setRegion(region)
            console.log(response)
          }

          
useEffect(() => {
    
   fetchRegions()
  
  
}, [])

    return(
        
    <div className="Filter-by-region">
    <select  name="select" value={Regions.reg} onChange={fetchRegions("america")}>
        <option value="Africa">Africa</option>
         <option value="Asia">Asia</option>
         <option value="Europe">Europe</option>
         <option value="Americas">America</option>
         <option value="Oceania">Oceania</option>
    </select>
 </div>
    )
}


export default Filter