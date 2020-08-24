import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss'

import Header from "./header";
import Slider from "./slider";
import Search from "./search";
import Recipies from "./recipies";
import Form from "./form";
import Footer from "./footer";


const App = () => {

    return (
        <>
            <Header/>
            <Slider/>
            <Search/>
            <Recipies/>
            <Form/>
            <Footer/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));