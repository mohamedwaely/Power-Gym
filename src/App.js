import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import "./App.css"
import React from "react";
import Hero from './components/Hero/Hero';
import Programs from './components/programs/programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans'
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from './components/Footer/Footer'
function App (){
    return(
<div className="App">
 <Hero/> 
<Programs/>
<Reasons/>
<Plans/>
<Testimonials/>
<Join/>
<Footer/>
</div>
    )
};
export default App;