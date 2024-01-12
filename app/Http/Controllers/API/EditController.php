<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lecturers;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\ResponseFactory;

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

    public function update(Request $request){
        $id = $request->input('claimId');
        $updated = Lecturers::where('id', $id)->update([
            'firstName' => $request->input('firstName'),
            'lastName' => $request->input('lastName'),
            'department' => $request->input('department'),
            'academicRank' => $request->input('academicRank'),
        ]);
         //check if exists
         if($updated) {
            return response() -> json(['message'=> 'Lecturer updated successfully']);
         } else {
            return response() -> json(['error'=> "There is no such lecturer in the database"]);
         }
    }
}
