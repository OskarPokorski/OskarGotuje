import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './scss/main.scss'

import Header from "./header";
import Slider from "./slider";
import Recipes from "./recipes";
import Form from "./form";
import Details from "./details";
import Footer from "./footer";

const Main = () => {
    return (
        <>
            <Slider/>
            <Recipes/>
            <Form/>
        </>
    )
}

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route path={"/details/:id"} component={Details}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));