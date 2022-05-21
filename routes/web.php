<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/Home', function () {
    return view('welcome');
});

Route::get('/categories/Food', function () {
    return view('welcome');
});

Route::get('/categories/Toys', function () {
    return view('welcome');
});

Route::get('/categories/Clothes', function () {
    return view('welcome');
});

Route::get('/categories/Details', function () {
    return view('welcome');
});

Route::get('/Login', function () {
    return view('welcome');
});
Route::get('/Register', function () {
    return view('welcome');
});

Route::get('/user/Mainprofile', function () {
    return view('welcome');
});

Route::get('/user/NavUser', function () {
    return view('welcome');
});

Route::get('/admindashboard/MainAdmin', function () {
    return view('welcome');
});

Route::get('/admindashboard/AProducts', function () {
    return view('welcome');
});

Route::get('/admindashboard/AUsers', function () {
    return view('welcome');
});

Route::get('/admindashboard/AOrder', function () {
    return view('welcome');
});

Route::get('/admindashboard/ACategories', function () {
    return view('welcome');
});

Route::get('/admindashboard/AEmployee', function () {
    return view('welcome');
});

Route::get('/admindashboard/AddProdcut', function () {
    return view('welcome');
});

Route::get('/admindashboard/AddCategories', function () {
    return view('welcome');
});

Route::get('/admindashboard/AddEmployee', function () {
    return view('welcome');
});

Route::get('/admindashboard/EditProduct', function () {
    return view('welcome');
});

Route::get('/admindashboard/EditCategories', function () {
    return view('welcome');
});

Route::get('/admindashboard/EditEmployee', function () {
    return view('welcome');
});

Route::get('/admindashboard/DeleteProduct', function () {
    return view('welcome');
});

Route::get('/admindashboard/DeleteOrder', function () {
    return view('welcome');
});

Route::get('/admindashboard/DeleteCategories', function () {
    return view('welcome');
});

Route::get('/admindashboard/DeleteEmployee', function () {
    return view('welcome');
});