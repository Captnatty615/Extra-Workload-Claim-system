<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Claim;

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
}
