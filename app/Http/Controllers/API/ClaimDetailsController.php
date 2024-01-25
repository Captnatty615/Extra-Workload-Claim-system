<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ClaimDetails;

class ClaimDetailsController extends Controller
{
    public function store(Request $request){
            $claimDetails = new ClaimDetails();
            $claimDetails->claimId = $request->input('claimId');
            $claimDetails->faculty = $request->input('faculty');
            $claimDetails->claim_department = $request->input('claim_department');
            $claimDetails->module_code = $request->input('module_code');
            $claimDetails->lecture_hours = $request->input('lecture_hours');
            $claimDetails->tutorial_hours = $request->input('tutorial_hours');
            $claimDetails->area = $request->input('area');
            $claimDetails->day = $request->input('day');
            $claimDetails->attendance_sheet = $request->input('attendanceSheet');
            $claimDetails->save();

            return response()->json([
                'status' => 200,
                'message' => 'success',
            ]);

    }

    public function getAttendanceSheets(Request $request)
    {
        $claimId = $request->input('claimId');
        try {
            // Fetch all attendance sheets for the given claimId
            $attendanceSheets = ClaimDetails::where('claimId', $claimId)
                ->pluck('attendance_sheet')
                ->toArray();

            // You may want to perform additional validation or error handling here

            return response()->json(['attendance_sheets' => $attendanceSheets]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching attendance sheets'], 500);
        }
    }
}
