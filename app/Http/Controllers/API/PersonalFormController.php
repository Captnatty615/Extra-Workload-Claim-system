<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PersonalInfo;

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

        
    }
}
