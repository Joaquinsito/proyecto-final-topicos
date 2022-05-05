<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class PassportAuthController extends Controller
{
    public function register(Request $request){

        $this->validate($request, [
            'name' => 'required|min:4',
            'lastname' => 'required|min:4',
            'address' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'address' => $request->address,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token=$user->createToken('LaravelAuthApp')->accessToken;
    
        return response()->json(['token'=>$token],200);
    }

    public function login(Request $request){
        $data=[
            'email' => $request->email,
            'password' => $request->password,
        ];

        if(auth()->attempt($data)){
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            $id = auth()->user()->id;
            return response()->json(['token' => $token, 'id' => $id],200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
}
