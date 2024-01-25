<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Mail;
use App\Mail\DepartmentMails;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\ResponseFactory;
use App\Models\ClaimDetails;

class MailController extends Controller
{
    public function index(Request $request) {
        $firstName = $request->input('firstName');
        $lastName = $request->input('lastName');
        $claimId = $request->input('claimId');
        // $claimDepartment = $request->input('claimDepartment');

        $subject = 'Claim approval';
        $body = "Approve {$firstName} {$lastName} concerning your subject";

        $data = [
            'subject' => $subject,
            'body' => $body,
        ];
        try{
        
            // Fetch claim departments for the given claimId from the database
            $claimDepartments = ClaimDetails::where('claimId', $claimId)->pluck('claim_department')->toArray();
        
            // Mapping department names to email addresses
            $departmentEmails = [
                'ACCOUNTING AND FINANCE' => 'abdulkarimnatty615@example.com',
                'COMPUTER SCIENCE' => 'abdulkarimnatty615@example.com',
                'INFORMATION TECHNOLOGY' => 'abdulkarimnatty615@example.com',
                // Add more departments and email addresses
            ];
            foreach ($claimDepartments as $claimDepartment) {
                // Default email if the department is not found
                $hodEmail = $departmentEmails[$claimDepartment];
                Mail::to($hodEmail)->send(new DepartmentMails($data));

            }
        
            //Mail::to('badru9me@gmail.com')->send(new DepartmentMails($data));
            return response()->json(['all good']);
        }
        catch (Exception $th){
            return response()->json(['something is wrong']);
        }
    }
}
