<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Mail;
use App\Mail\DepartmentMails;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\ResponseFactory;

class MailController extends Controller
{
    public function index(Request $request) {
        $firstName = $request->input('firstName');
        $lastName = $request->input('lastName');
        $moduleCode = $request->input('moduleCode');

        $subject = 'Claim approval';
        $body = "Approve {$firstName} {$lastName} concerning your subject {$moduleCode}";

        $data = [
            'subject' => $subject,
            'body' => $body,
        ];
        try{
            Mail::to('abdulkarimnatty615@gmail.com')->send(new DepartmentMails($data));
            return response()->json(['all good']);
        }
        catch (Exception $th){
            return response()->json(['something is wrong']);
        }
    }
}
