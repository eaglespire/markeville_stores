<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        //First validate incoming data
        $validData = $request->validate([
            'name'=>'required|string',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed|min:8'
        ]);
        //Create a new user
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);

        //generate an access token
        $token = $user->createToken('authToken')->accessToken;

        return response([
            'user'=>$user,
            'token'=>$token
        ]);
    }

    public function login(Request $request)
    {
        //First validate incoming data
        /*$validData = $request->validate([
            'email'=>'required|email',
            'password'=>'required|min:8'
        ]);
        try{

        }

        if (!auth()->attempt($validData)){
            return response([
                'message'=>'Invalid email/password'
            ]);
        }

        $token = auth()->user()->createToken('authToken')->accessToken;
        return response([
            'user'=>auth()->user(),
            'token'=>$token
        ]);*/

        try{
            if (Auth::attempt($request->only('email','password'))){
                $user = Auth::user();

                /** @var $user */
                $token = $user->createToken('app')->accessToken;

                return response([
                    'message'=>'Logged in successfully!!!',
                    'user'=>$user,
                    'token'=>$token
                ],200);
            }
        }catch(\Exception $exception){
            return response([
                'message'=>$exception->getMessage()
            ],400);
        }

        return response([
            'message'=>'Invalid username/password',
        ],401);
    }
}
