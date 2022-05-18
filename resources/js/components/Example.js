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
import Register from './Register'
import Mainprofile from './user/Mainprofile'
import EditProfile from './user/EditProfile'
import NavigationUser from './user/NavUser'
import OrderUser from './user/OrderUser'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"



function Example() {
    return (
        <>
        <Router>
            <main>
                <Switch>
                    <Route path="/projectMascotitas/public/" exact component={Main} />
                    <Route path="/projectMascotitas/public/Home" exact component={Home} />
                    <Route path="/projectMascotitas/public/categories/Food" exact component={Food} />
                    <Route path="/projectMascotitas/public/categories/Toys" component={Toys} />
                    <Route path="/projectMascotitas/public/categories/Clothes" component={Clothes} />
                    <Route path="/projectMascotitas/public/categories/Details" component={ProductDetails} />
                    <Route path="/projectMascotitas/public/Login" component={Login} />
                    <Route path="/projectMascotitas/public/Register" component={Register} />
                    <Route path="/projectMascotitas/public/user/Mainprofile" component={Mainprofile} />
                    <Route path="/projectMascotitas/public/user/EditProfile" component={EditProfile} />
                    <Route path="/projectMascotitas/public/user/NavigationUser" component={NavigationUser} />
                    <Route path="/projectMascotitas/public/user/OrderUser" exact component={OrderUser} />
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
