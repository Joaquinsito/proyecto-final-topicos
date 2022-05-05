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
        return CompraUser::all();
    }

    public function compraUser(Request $request){
        $user = User::where('email', $request->email)->first();
        $compraUser = DB::table('products')->leftJoin('compra_users', 'products.id', '=', 'compra_users.products_id')
        ->where('compras_users.user_id', '=', $user->id)
        ->get();
        return $compraUser;
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
            'amount' => 'required|max:5'    
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
    public function destroy(CompraUser $compraUser)
    {
        //
    }
}
