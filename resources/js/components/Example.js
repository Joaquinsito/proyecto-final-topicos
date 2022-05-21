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
import NavigationAdmin from './admindashboard/NavAdmin';
import AProducts from './admindashboard/AProducts'
import AUsers from './admindashboard/AUsers'
import AOrder from './admindashboard/AOrder';
import MainAdmin from './admindashboard/MainAdmin';
import AddProduct from './admindashboard/AddProduct';
import EditProduct from './admindashboard/EditProduct';
import DeleteProduct from './admindashboard/DeleteProduct';
import DeleteOrder from './admindashboard/DeleteOrder';
import AddUser from './admindashboard/AddUsers';
import DeleteUser from './admindashboard/DeleteUsers';
import EditUser from './admindashboard/EditUsers';
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
                    <Route path="/projectMascotitas/public/admindashboard/NavAdmin" exact component={NavigationAdmin} />
                    <Route path="/projectMascotitas/public/admindashboard/AProducts" exact component={AProducts} />
                    <Route path="/projectMascotitas/public/admindashboard/AOrder" exact component={AOrder} />
                    <Route path="/projectMascotitas/public/admindashboard/AUsers" exact component={AUsers} />
                    <Route path="/projectMascotitas/public/admindashboard/MainAdmin" exact component={MainAdmin}/>
                    <Route path="/projectMascotitas/public/admindashboard/AddProduct" exact component={AddProduct} />
                    <Route path="/projectMascotitas/public/admindashboard/EditProduct" exact component={EditProduct} />
                    <Route path="/projectMascotitas/public/admindashboard/DeleteProduct" exact component={DeleteProduct} />
                    <Route path="/projectMascotitas/public/admindashboard/DeleteOrder" exact component={DeleteOrder} />
                    <Route path="/projectMascotitas/public/admindashboard/DeleteUsers" exact component={DeleteUser} />
                    <Route path="/projectMascotitas/public/admindashboard/EditUsers" exact component={EditUser} />
                    <Route path="/projectMascotitas/public/admindashboard/AddUsers" exact component={AddUser} />
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
