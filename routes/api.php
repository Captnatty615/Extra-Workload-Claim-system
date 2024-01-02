<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PersonalFormController;
use App\Http\Controllers\API\ClaimsController;

Route::post('/submit-Personal-Form', [PersonalFormController::class, 'store']);

Route::post('/claims', [ClaimsController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

