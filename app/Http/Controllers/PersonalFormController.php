<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teacher;
use App\Models\Department;
use App\Models\Faculty;

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
        // creating new teacher record
        $teacher = new Teacher();
    }
}
