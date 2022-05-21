<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompraUserController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Models\CompraUser;
use PhpParser\Node\Expr\PostDec;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::post('updateData', [PassportAuthController::class, 'updateData']);
Route::post('users', [PassportAuthController::class, 'users']);
Route::post('deleteUser', [PassportAuthController::class, 'deleteUser']);


Route::post('createcategory', [CategoryController::class, 'create']);
Route::post('updatecategory', [CategoryController::class, 'update']);
Route::post('deletecategory', [CategoryController::class, 'destroy']);

Route::post('createemployee', [EmployeeController::class, 'create']);
Route::post('updateemployee', [EmployeeController::class, 'update']);
Route::post('deleteemployee', [EmployeeController::class, 'destroy']);


Route::post('indexproduct', [ProductController::class, 'index']);
Route::post('categories', [ProductController::class, 'categories'] );

Route::post('createproduct', [ProductController::class, 'create']);
Route::post('updateproduct', [ProductController::class, 'update']);
Route::post('deleteproduct', [ProductController::class, 'destroy']);

Route::post('createCompra', [CompraUserController::class, 'create']);
Route::post('allcompraUser', [CompraUserController::class, 'index']);
Route::post('compraUser', [CompraUserController::class, 'compraUser']);
Route::post('deleteCompra', [CompraUserController::class, 'destroy']);



Route::middleware('auth:api')->group(function (){
    Route::post('userData', [PassportAuthController::class, 'userData']);
});
