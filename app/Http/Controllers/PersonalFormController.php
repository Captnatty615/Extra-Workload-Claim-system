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
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'academic_rank' => 'required|string',
            'department' => 'required|string:exists:departments,department',
        ]);
        // access form data using $request->input('field_name')
        // creating new teacher record
        $teacher = new Teacher();
        $teacher->first_name = $request->input('first_name');
        $teacher->last_name = $request->input('last_name');
        $teacher->academic_rank = $request->input('academic_rank');
        $teacher->department_id = $request->input('department_id');
        $teacher->save();

        // Perform database logic here
    }
}
