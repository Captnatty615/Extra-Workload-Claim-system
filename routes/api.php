<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\LecturersController;
use App\Http\Controllers\API\ClaimDetailscontroller;
use App\Http\Controllers\API\ReportController;
use App\Http\Controllers\API\EditController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\API\MailController;


Route::post('/submit-Personal-Form', [LecturersController::class, 'store']);
Route::post('/submit-claimDetails', [ClaimDetailsController::class, 'store']);
Route::post('/report', [ReportController::class, 'index']);
Route::post('/get-current-data', [EditController::class, 'index']);
Route::post('/save-updates', [EditController::class, 'update']);
Route::post('/login',[AuthController::class, 'login']);
Route::post('/mail',[MailController::class, 'index']);
Route::post('/signup',[AuthController::class, 'signup']);
 
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
});

