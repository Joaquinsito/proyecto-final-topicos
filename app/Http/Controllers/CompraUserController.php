<?php

namespace App\Http\Controllers;

use App\Models\CompraUser;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CompraUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $compras = CompraUser::join('products', 'products.id', '=', 'compra_users.products_id')
        ->get(['compra_users.id','compra_users.user_id', 'compra_users.products_id', 'products.name', 'compra_users.amount']);
        // return CompraUser::all();
        return $compras;
    }

    public function compraUser(Request $request){
        // $orders = DB::table('compra_users')->where("user_id", "=", $request->id)->get();
        // return $orders;
        $compras = CompraUser::join('products', 'products.id', '=', 'compra_users.products_id')->where("user_id", "=", $request->id)
        ->get(['compra_users.id','compra_users.user_id', 'compra_users.products_id', 'products.name', 'compra_users.amount']);
        return $compras;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
   
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'amount' => 'required|max:10'    
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $compra = CompraUser::create([
            'user_id' => $request->id,
            'products_id' => $request->product_id,
            'amount' => $request->amount
        ]);

        return CompraUser::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CompraUser  $compraUser
     * @return \Illuminate\Http\Response
     */
    public function show(CompraUser $compraUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CompraUser  $compraUser
     * @return \Illuminate\Http\Response
     */
    public function edit(CompraUser $compraUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CompraUser  $compraUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CompraUser $compraUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CompraUser  $compraUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(CompraUser $compraUser, Request $request)
    {
        CompraUser::where('id', $request->id)->delete();
    }
}
