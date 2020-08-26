import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './scss/main.scss'

import Header from "./header";
import Slider from "./slider";
import Search from "./search";
import Recipes from "./recipes";
import Form from "./form";
import Details from "./details";
import Footer from "./footer";


const App = () => {

    return (
        <>
            <Header/>
            <Slider/>
            <Search/>
            <Recipes/>
            <Form/>
            <Footer/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));