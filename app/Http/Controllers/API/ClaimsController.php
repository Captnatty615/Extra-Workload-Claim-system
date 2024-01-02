<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Claims;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\ResponseFactory;

class ClaimsController extends Controller
{
    public function store (Request $request){
        $claim = new Claim();
        $claim->firstName = $request->input('firstName');
        $claim->lastName = $request->input('lastName');
        $claim->academicRank = $request->input('academicRank');
        $claim->department = $request->input('department');
        $claim->department = $request->input('faculty');
        $claim->department = $request->input('claim_department');
        $claim->module_code = $request->input('module_code');
        $claim->lecture_hours = $request->input('lecture_hours');
        $claim->tutorial_hours = $request->input('tutorial_hours');
        $claim->area = $request->input('area');
        $claim->day = $request->input('day');
        $claim->save();

        //return response()->json([
         //   'status' => 200,
         //   'message'=> "Successfully added personal information!",

        //]);

    }
}
