<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Claim;
use App\Models\Lecturers;

class AdminController extends Controller
{
    public function getUsers()
    {
        try {
            // Fetch users with specified conditions (role != 'admin')
            $users = User::where('role', '!=', 'admin')
                ->select('name', 'email', 'id')
                ->get();

            return response()->json($users);
        } catch (\Exception $e) {
            // Handle any exceptions or errors
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function updateUser(Request $request)
    {
        try {
            $data = $request->validate([
                'fullName' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
                'currentEmail' => 'required|string|email|max:255',
            ]);

            $user = User::where('email', $data['currentEmail'])->first();

            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }

            $user->name = $data['fullName'];
            $user->email = $data['email'];
            $user->save();

            return response()->json(['message' => 'User updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function deleteUser(Request $request)
    {
            $email = $request->input('email');
        try {
            $user = User::where('email', $email)->first();

            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }

            $user->delete();

            return response()->json(['message' => 'User deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function getClaims(Request $request) {
        try {
            // Fetch all claims from the claims table
            $claims = Claim::with('lecturer:id,firstName,lastName')->get();

            return response()->json($claims);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
