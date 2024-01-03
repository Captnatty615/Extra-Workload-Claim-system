<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lecturers;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\ResponseFactory;

class LecturersController extends Controller
{
    public function store(Request $request)
    {
        $lecturer = new Lecturers ;
        $lecturer->firstName = $request->input('firstName');
        $lecturer->lastName = $request->input('lastName');
        $lecturer->academicRank = $request->input('academicRank');
        $lecturer->department = $request->input('department');
        $lecturer->save();

        $lecturer_id = $lecturer->getKey();

        return response()->json([
            'status' => 200,
            'message'=> "Successfully added personal information!",
            'lecturer_id'=> $lecturer_id,

        ]);
    }

}
