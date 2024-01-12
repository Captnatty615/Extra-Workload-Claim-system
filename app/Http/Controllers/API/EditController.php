<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lecturers;

class EditController extends Controller
{
    public function index(Request $request){
        $id = $request->input('claimId');
        $lecturerData = Lecturers::find($id, ['firstName', 'lastName', 'academicRank', 'department']);
        $firstName = $lecturerData->firstName;
        $lastName = $lecturerData->lastName;
        $acadmeicRank = $lecturerData->academicRank;
        $department = $lecturerData->department;
        return response()->json([
            'firstName' => $firstName,
            'lastName' => $lastName,
            'academicRank' => $acadmeicRank,
            'department' => $department
        ]);
    }
}
