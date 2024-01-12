<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\LecturersController;
use App\Http\Controllers\API\ClaimDetailscontroller;
use App\Http\Controllers\API\ReportController;
use App\Http\Controllers\API\EditController;

Route::post('/submit-Personal-Form', [LecturersController::class, 'store']);
Route::post('/submit-claimDetails', [ClaimDetailsController::class, 'store']);
Route::post('/report', [ReportController::class, 'index']);
Route::post('/get-current-data', [EditController::class, 'index']);
Route::post('/save-updates', [EditController::class, 'index']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

