<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturers;
use App\Models\ClaimDetails;

class ReportController extends Controller
{
    public function index($id){
        //fetch and format data TODO

        //fetch data from lecturers table
        $lecturerData = Lecturer::find($id, ['firstName', 'lastName', 'academicRank', 'department']);

        //fetch data from the claimDetails table
        $claimDetailsData = ClaimDetails::where('claimId', $id)
        ->select('claim_department','module_code', 'lecture_hours', 'tutorial_hours')
        ->get();

        //calculate total hours 
        $totalLectureHours = $claimDetailsData->sum('lecture_hours');
        $totalTutorialHours= $claimDetailsData->sum('tutorial_hours');

        //Calculating total hours
        $totalHours = $totalLectureHours + $totalTutorialHours;

        //count records with area='maktaba'
        $maktabaCount = ClaimDetails::where('claimId', $id)
        ->where('area', 'maktaba')
        ->count();

        //count records with day = 'weekend'
        $weekendCount = ClaimDetails::where('claimId', $id)
        ->where('day', 'weekend')
        ->count();

        //determining academic rank
        $academicRank = $lecturerData->academicRank;

        //claculating extra allowance based on academicRank and total hours
        if ($academicRank == "tutorial_assistant" && $totalHours > 12){
            $extraAllowance = ($maktabaCount * 10000) + ($weekendCount * 15000) + (($totalHours - 12) * 20000);
            return response()->json([
                'lecturerData' => $lecturerData,
                'claimDetailsData' => $claimDetailsData,
                'totalLectureHours' => $totalLectureHours,
                'totalTutorialHours' => $totalTutorialHours,
                'totalHours' => $totalHours, 
                'maktabaCount' => $maktabaCount,
                'weekendCount' => $weekendCount,
                'extraAllowance' => $extraAllowance,
            ]);
        } elseif ($academicRank == "lecturer" && $totalHours > 10){
            $extraAllowance = ($maktabaCount * 10000) + ($weekendCount * 15000) + (($totalHours - 10) * 20000);
            return response()->json([
                'lecturerData' => $lecturerData,
                'claimDetailsData' => $claimDetailsData,
                'totalLectureHours' => $totalLectureHours,
                'totalTutorialHours' => $totalTutorialHours,
                'totalHours' => $totalHours, 
                'maktabaCount' => $maktabaCount,
                'weekendCount' => $weekendCount,
                'extraAllowance' => $extraAllowance,
            ]);
        } elseif ($academicRank == "senior_lecturer" && $totalHours > 9){
            $extraAllowance = ($maktabaCount * 10000) + ($weekendCount * 15000) + (($totalHours - 9) * 20000);
            return response()->json([
                'lecturerData' => $lecturerData,
                'claimDetailsData' => $claimDetailsData,
                'totalLectureHours' => $totalLectureHours,
                'totalTutorialHours' => $totalTutorialHours,
                'totalHours' => $totalHours, 
                'maktabaCount' => $maktabaCount,
                'weekendCount' => $weekendCount,
                'extraAllowance' => $extraAllowance,
            ]);
        } elseif ($academicRank == "associate_professor" && $totalHours > 8){
            $extraAllowance = ($maktabaCount * 10000) + ($weekendCount * 15000) + (($totalHours - 8) * 20000);
            return response()->json([
                'lecturerData' => $lecturerData,
                'claimDetailsData' => $claimDetailsData,
                'totalLectureHours' => $totalLectureHours,
                'totalTutorialHours' => $totalTutorialHours,
                'totalHours' => $totalHours, 
                'maktabaCount' => $maktabaCount,
                'weekendCount' => $weekendCount,
                'extraAllowance' => $extraAllowance,
            ]);
        } elseif ($academicRank == "professor" && $totalHours > 7){
            $extraAllowance = ($maktabaCount * 10000) + ($weekendCount * 15000) + (($totalHours - 7) * 20000);
            return response()->json([
                'lecturerData' => $lecturerData,
                'claimDetailsData' => $claimDetailsData,
                'totalLectureHours' => $totalLectureHours,
                'totalTutorialHours' => $totalTutorialHours,
                'totalHours' => $totalHours, 
                'maktabaCount' => $maktabaCount,
                'weekendCount' => $weekendCount,
                'extraAllowance' => $extraAllowance,
            ]);
        }  else {
            // If none of the conditions are met, total hours do not exceed the maximum workload
            return response()->json(['message' => 'Total hours do not exceed the maximum workload. Cannot claim extra allowance.']);
        }

       
    }
}
