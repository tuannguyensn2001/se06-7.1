<?php

namespace App\Http\Controllers;

use App\Models\Model;
use App\Services\ModelService;
use Illuminate\Http\Request;

class ModelController extends Controller
{

    private $modelService;

    public function __construct(ModelService $service)
    {
        $this->modelService = $service;
    }


    public function index(): \Illuminate\Http\JsonResponse
    {

            $result = $this->modelService->handleGetModels();

            return $this->response([
                'message' => 'Lấy thông tin models thành công',
                'data' => $result
            ]);

    }
}
