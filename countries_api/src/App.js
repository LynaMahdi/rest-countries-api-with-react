import './App.css';
import All from './components/all';
import Head from './components/head';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Head />
      <Routes>  
        <Route path="/" element={<All />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
