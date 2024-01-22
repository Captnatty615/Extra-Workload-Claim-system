<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class AuthController extends Controller
{

    public function signup(SignUpRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return response([
            'user' => $user
        ]);
    }
    public function login(LoginRequest $request) {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!auth()->attempt($credentials, $remember)) {
            return Response::json([
                'error'=> 'The provided credentials are incorrect'
            ], 422);
        }
        $user = auth()->user();
        $token = $user->createToken('main', ['role' => $user->role])->plainTextToken;
        $role = $user->role;

        return response([
            'user' => $user,
            'token' => $token,
            'role' => $role
        ]);
        
    }

    // logout user

    public function logout(Request $request) {

        $user = Auth::user();
        $user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
        }
        //get user
    }

