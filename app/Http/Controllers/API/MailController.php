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
            $index = 0;
            while($index < count($claimDepartments)){
                $department = $claimDepartments[$index];

                switch($department) {
                    case 'COMPUTER SCIENCE':
                        Mail::to('abdulkarimnatty615@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'ACCOUNTING AND FINANCE':
                            Mail::to('agathayohannes63@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'ECONOMICS AND TAX MANAGEMENT':
                        Mail::to('abdulkarimnatty615@gmail@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'MANAGEMENT SCEINCES':
                        Mail::to('agathayohannes63@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'INFORMATION TECHNOLOGY':
                        Mail::to('abdulkarimnatty615@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'MATHEMATICS AND ACTURIAL STUDIES':
                        Mail::to('agathayohannes63@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'BANKING AND FINANCIAL SERVICES':
                        Mail::to('abdulkarimnatty615@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'SOCIAL PROTECTION':
                        Mail::to('agathayohannes63@gmail.com')->send(new DepartmentMails($data));
                        break;
                    case 'INSURANCE':
                        Mail::to('abdulkarimnatty615@gmail.com')->send(new DepartmentMails($data));
                        break;
                    default:
                    return "Invalid department name.";
                    break;
                                    }
                                    $index++;
            }
            return response()->json(['all good']);
        }
        catch (Exception $th){
            return response()->json(['something is wrong']);
        }
    }
}
