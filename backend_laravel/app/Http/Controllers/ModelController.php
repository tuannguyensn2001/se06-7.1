<?php

namespace App\Http\Controllers;

use App\Models\Model;
use App\Services\ModelService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'model' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->responseBadRequest('Thông tin không hợp lệ');
        }

        $data = $request->only('name', 'model');

        try {
            $result = $this->modelService->handleCreate($data);

            return $this->response([
                'message' => 'Thêm model mới thành công',
                'data' => $result
            ]);

        } catch (\Exception $exception) {
            return $this->responseInternalServerError($exception->getMessage());
        }
    }
}
