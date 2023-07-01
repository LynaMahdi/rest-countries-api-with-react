import './App.css';
import React , {useState} from 'react';
import All from './components/all';
import Head from './components/head';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from './components/country';
function App() {
   const [chosedCountry,setChosedCountry]=useState([])

  return (
    
    <>
    <BrowserRouter>
      <Head  />
      <Routes> 
        <Route path='/' element={<All setChosedCountry={setChosedCountry}/>}></Route>
        <Route path="/country/:choosedCountry"  element={<Country chosedCountry={chosedCountry} />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
