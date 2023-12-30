<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonalFormController extends Controller
{
    public function submitPersonalForm(Request $request)
    {
        // process and validate form data
        // access form data using $request->input('field_name')
        $firstName = $request->input('firstName');
        $lastName = $request->input('lastName');
        $academicRank = $request->input('academicRank');
        $department =$request->input('department');

        // Perform database logic here
    }
}
