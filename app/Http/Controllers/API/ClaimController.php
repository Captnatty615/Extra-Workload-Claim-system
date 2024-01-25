<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Claim;
use App\Models\Lecturers;

class ClaimController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'claimId' => 'required|exists:lecturers,id',
            'status' => 'required|in:approved,rejected,pending',
            'amount' => 'required|numeric|min:0',
        ]);

        // Create a new claim
        $claim = Claim::create([
            'claimId' => $request->input('claimId'),
            'status' => $request->input('status'),
            'amount' => $request->input('amount'),
        ]);

        return response()->json(['message' => 'Claim created successfully', 'data' => $claim], 201);
    }
    public function getStatus(Request $request)
    {
        $request->validate([
            'claimId' => 'required|exists:lecturers,id',
        ]);
        
        $claimId = $request->input('claimId');
        $claim = Claim::where('claimId', $claimId)->first();
        $lecturer = $claim->lecturer;
        $names = Claim::with('lecturer:id,firstName,lastName')->get();

        if (!$claim) {
            return response()->json(['error' => 'Claim not found'], 404);
        }
        $response = [
            'status' => $claim->status,
            'firstName' => $lecturer->firstName,
            'lastName' => $lecturer->lastName,
        ];

        return response()->json($response);
    }
}
