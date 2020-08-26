import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './scss/main.scss'

import Header from "./header";
import Slider from "./slider";
import Search from "./search";
import Recipes from "./recipes";
import Form from "./form";
import Details from "./details";
import Footer from "./footer";

const Main = () => {
    return (
        <>
            <Slider/>
            <Search/>
            <Recipes/>
            <Form/>
        </>
    )
}

const App = () => {

    return (
        <>
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route path={"/details"} component={Details}/>
                </Switch>
                <Footer/>
            </HashRouter>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));