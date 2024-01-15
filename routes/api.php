<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\LecturersController;
use App\Http\Controllers\API\ClaimDetailscontroller;
use App\Http\Controllers\API\ReportController;
use App\Http\Controllers\API\EditController;
use App\Http\Controllers\API\AuthController;


Route::post('/submit-Personal-Form', [LecturersController::class, 'store']);
Route::post('/submit-claimDetails', [ClaimDetailsController::class, 'store']);
Route::post('/report', [ReportController::class, 'index']);
Route::post('/get-current-data', [EditController::class, 'index']);
Route::post('/save-updates', [EditController::class, 'update']);

Route::post('/login',[AuthController::class, 'login']);
Route::get('/signup',[AuthController::class, 'signup']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

