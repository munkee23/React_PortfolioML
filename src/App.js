import React, { Component } from 'react';
import './App.css'

import Header from "./components/Header";
import Main from "./components/Main";
import Second from "./components/Second";
import Footer from "./components/Footer";


function App(){
    return(
  
        <div className="App">
            <Header/>
            <Main/>
            <Second/>
            <Footer/>
        </div>

    );
};


export default App;
