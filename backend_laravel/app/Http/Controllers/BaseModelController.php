<?php

namespace App\Http\Controllers;

use App\Services\BaseModelService;
use Illuminate\Http\Request;

class BaseModelController extends Controller
{

    private $service;

    public function __construct(BaseModelService $service)
    {
        $this->service = $service;
    }

    public function index(): \Illuminate\Http\JsonResponse
    {

        $result = $this->service->handleGetBaseModel();

        return $this->response([
            'message' => trans('system.get_success'),
            'data' => $result
        ]);
    }

    public function show($id)
    {
        $result = $this->service->handleShowBaseModel($id);

        return $this->response([
            'message' => trans('system.get_success'),
            'data' => $result
        ]);
    }
}
