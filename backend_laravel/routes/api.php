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

    Route::group(['prefix' => '/models'], function () {
        Route::get('/', [\App\Http\Controllers\ModelController::class, 'index'])->middleware('jwt');
        Route::post('/', [\App\Http\Controllers\ModelController::class, 'store'])->middleware('jwt');
        Route::get('/{id}', [\App\Http\Controllers\ModelController::class, 'show'])->middleware('jwt');
        Route::put('/{id}', [\App\Http\Controllers\ModelController::class, 'update'])->middleware('jwt');
        Route::delete('/{id}',[\App\Http\Controllers\ModelController::class,'destroy'])->middleware('jwt');
    });

    Route::group(['prefix' => '/upload'], function () {
        Route::post('/', [\App\Http\Controllers\UploadController::class, 'store']);
    });

    Route::group([
        'prefix' => '/base-models',
    ], function () {
        Route::get('/', [\App\Http\Controllers\BaseModelController::class, 'index']);
        Route::get('/{id}', [\App\Http\Controllers\BaseModelController::class, 'show']);
    });


});
