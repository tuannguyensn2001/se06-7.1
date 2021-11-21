<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/v1'], function () {

    Route::group(['prefix' => '/auth'], function () {
        Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
        Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
        Route::get('/me', [\App\Http\Controllers\AuthController::class, 'me'])->middleware('jwt');
    });

    Route::get('/models', [\App\Http\Controllers\ModelController::class, 'index']);
});
