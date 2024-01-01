<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PersonalInfo;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\ResponseFactory;

class PersonalFormController extends Controller
{
    public function store(Request $request)
    {
        $personalInfo = new PersonalInfo;
        $personalInfo->firstName = $request->input('firstName');
        $personalInfo->lastName = $request->input('lastName');
        $personalInfo->academicRank = $request->input('academicRank');
        $personalInfo->department = $request->input('department');
        $personalInfo->save();

        return response()->json([
            'status' => 200,
            'message'=> "Successfully added personal information!",

        ]);
    }
}
