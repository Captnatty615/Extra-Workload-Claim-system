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
        // $claimDepartment = $request->input('claimDepartment');

        $subject = 'Claim approval';
        $body = "Approve {$firstName} {$lastName} concerning your subject";

        $data = [
            'subject' => $subject,
            'body' => $body,
        ];
        try{
            /* loop through claimDepartments array and execute for each value of department the following block of code {
                     //if($claimDepartment == 'accounting_finance'){
                Mail::to('emailbelongingtohodofthisdepartment')->send(new DepartmentMails($data));
            return response()->json(['all good']);
        }
        else if($claimDepartment == 'computerScience'){
             Mail::to('emailbelongingtohodofthisdepartment')->send(new DepartmentMails($data));
            return response()->json(['all good']);
        }
        else if($claimDepartment == 'information_technology'){
             Mail::to('emailbelongingtohodofthisdepartment')->send(new DepartmentMails($data));
            return response()->json(['all good']);
        }
        and so on for each department...
            } 
            }
           */
            Mail::to('badru9me@gmail.com')->send(new DepartmentMails($data));
            return response()->json(['all good']);
        }
        catch (Exception $th){
            return response()->json(['something is wrong']);
        }
    }
}
