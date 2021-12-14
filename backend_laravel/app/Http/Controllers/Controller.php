<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function response($data, $status = ResponseAlias::HTTP_OK): \Illuminate\Http\JsonResponse
    {
        return response()->json($data, $status);
    }

    public function responseInternalServerError($error, $data = []): \Illuminate\Http\JsonResponse
    {
        return $this->response([
            'log' => $error['log'],
            'message' => $error['message'],
            'data' => $data
        ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
    }

}
