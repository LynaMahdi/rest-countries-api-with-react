import './filter-region.css'
import React ,{ useState ,useEffect} from 'react'



function Filter({setCountries}){
    
    const url='https://restcountries.com/v3.1/region/'
    const [Region,setRegion]=useState("america")

    const Regions = [

        {reg:'Africa'},
        {reg:'America'},
        {reg:'Asia'},
        {reg:'Europe'},
        {reg:'Oceania'}]

    
        const fetchRegions = async (reg) => {
            if(reg==undefined){
                let url='https://restcountries.com/v3.1/all'
                const  response = await fetch(url)
                const region = await response.json()
                setCountries(region)
              
            }else{

            let url=`https://restcountries.com/v3.1/region/${reg}`
            const  response = await fetch(url)
            const region = await response.json()
            setCountries(region)
}
           
        
          }

          
        useEffect(() => {  
           fetchRegions()}, [])

    return(
        
    <div className="Filter-by-region">
    <select
            name="select"
            className='select'
            id="select"
            onChange={(e) => fetchRegions(e.target.value)}
            
            value={Regions.reg}
          >
            
        
        <option value="default" disabled hidden>Filter by region</option>
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