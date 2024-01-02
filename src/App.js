// page created by Nidhin Babu
import  React from 'react'
import Banner from './components/Banner/Banner';
import Navbar from './components/navbar/navbar';
import "./App.css"
import RowPosters from './components/Rowposters/RowPosters';
import Footer from './components/Footer/Footer';
import {orginals,action,comedy,horror } from "./components/urls"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPosters url={orginals} title={"Netflix orginals"}/>
     <RowPosters url={action} title={"Action"} isSmall/> 
     <RowPosters url={horror} title={"Horror"} isSmall/> 
     <RowPosters url={comedy} title={"Comedy"} isSmall/> 
    <Footer/>
    </div>
  );
}

export default App;
