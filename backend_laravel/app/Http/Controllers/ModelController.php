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

        $data = $request->only([
            'name',
            'model',
            'preview',
            'skybox',
            'disable_zoom',
            'camera_control',
            'auto_rotate',
            'auto_rotate_delay',
            'rotation_per_second',
            'interaction_policy',
            'field_of_view',
            'max_field_of_view',
            'min_field_of_view',
            'interpolation_decay'
        ]);

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

    public function show($id): \Illuminate\Http\JsonResponse
    {
        $result = $this->modelService->handleGetModel($id);

        return $this->response([
            'message' => 'Lấy thông tin model thành công',
            'data' => $result
        ]);
    }

    public function update($id, Request $request): \Illuminate\Http\JsonResponse
    {
        $hasName = $request->has('_name') && boolval($request->query('_name'));

        $data = $request->only([
            'name',
            'model',
            'preview',
            'skybox',
            'disable_zoom',
            'camera_control',
            'auto_rotate',
            'auto_rotate_delay',
            'rotation_per_second',
            'interaction_policy',
            'field_of_view',
            'max_field_of_view',
            'min_field_of_view',
            'interpolation_decay'
        ]);

        try {
            if ($hasName) {
                $result = $this->modelService->handleUpdateByName($id, $request->get('name'));
            } else {
                $result = $this->modelService->handleUpdate($id, $data);
            }
            return $this->response([
                'message' => 'Update thành công',
                'data' => $result
            ]);
        } catch (\Exception $exception) {
            return $this->responseInternalServerError($exception->getMessage());
        }

    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        return $this->response([
            'message' => 'Xóa thành công',
            'data' => $id
        ]);

        try {
            $this->modelService->handleDestroy($id);
            return $this->response([
                'message' => 'Xóa thành công',
                'data' => $id
            ]);
        } catch (\Exception $exception) {
            return $this->responseInternalServerError($exception->getMessage());
        }
    }


}
