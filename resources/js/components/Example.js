import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Nav';
import Main from './mainpage/Main'
import Home from './Home'
import Food from './categories/Food'
import Toys from './categories/Toys'
import Clothes from './categories/Clothes'
import ProductDetails from "./categories/ProductDetails"
import Login from './Login';
import Mainprofile from './user/Mainprofile'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"



function Example() {
    return (
        <>
        <Router>
            <main>
                <Navigation />
                <Switch>
                    <Route path="/projectMascotitas/public/" exact component={Main} />
                    <Route path="/projectMascotitas/public/Home" exact component={Home} />
                    <Route path="/projectMascotitas/public/categories/Food" exact component={Food} />
                    <Route path="/projectMascotitas/public/categories/Toys" component={Toys} />
                    <Route path="/projectMascotitas/public/categories/Clothes" component={Clothes} />
                    <Route path="/projectMascotitas/public/categories/Details" component={ProductDetails} />
                </Switch>
            </main>
        </Router>
        </>
    );
}

export default Example;

if (document.getElementById('main')) {
    ReactDOM.render(<Example />, document.getElementById('main'));
}
