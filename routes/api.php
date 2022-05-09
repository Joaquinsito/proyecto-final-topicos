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
Route::post('createcategory', [CategoryController::class, 'create']);
Route::post('updatecategory', [CategoryController::class, 'update']);
Route::post('deletecategory', [CategoryController::class, 'destroy']);
Route::post('createemployee', [EmployeeController::class, 'create']);
Route::post('updateemployee', [EmployeeController::class, 'update']);
Route::post('deleteemployee', [EmployeeController::class, 'destroy']);


Route::post('indexproduct', [ProductController::class, 'index']);
Route::post('food', [ProductController::class, 'food'] );
Route::post('toys', [ProductController::class, 'toys'] );
Route::post('clothes', [ProductController::class, 'clothes'] );
Route::post('createproduct', [ProductController::class, 'create']);
Route::post('updateproduct', [ProductController::class, 'update']);
Route::post('deleteproduct', [ProductController::class, 'destroy']);

Route::post('compraUser', [CompraUserController::class, 'create']);
Route::post('allcompraUser', [CompraUserController::class, 'index']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
