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

    public function responseInternalServerError($message, $log = '', $data = []): \Illuminate\Http\JsonResponse
    {
        return $this->response([
            'log' => $log,
            'message' => $message,
            'data' => $data
        ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function responseBadRequest($message = '', $log = '', $data = []): \Illuminate\Http\JsonResponse
    {
        return $this->response([
            'message' => $message,
            'log' => $log,
            'data' => $data
        ], ResponseAlias::HTTP_BAD_REQUEST);
    }

}
