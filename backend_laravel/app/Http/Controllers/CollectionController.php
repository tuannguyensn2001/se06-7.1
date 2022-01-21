<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Services\CollectionService;
use Illuminate\Http\Request;

class CollectionController extends Controller
{

    private $service;

    public function __construct(CollectionService $service)
    {
        $this->service = $service;
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        $result = $this->service->handleGetCollectionByAuth();

        return $this->response([
            'message' => 'Lấy collection thành công',
            'data' => $result
        ]);
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->only('name', 'description');

        $result = $this->service->handleCreate($data);

        return $this->response([
            'message' => 'Tạo mới collection thành công',
            'data' => $result
        ]);
    }

    public function update($id, Request $request)
    {
        $collection = Collection::find($id);

        $data = $request->only('name', 'description');

        $collection->name = $data['name'];
        $collection->description = $data['description'];

        $collection->save();

        return $this->response([
            'message' => 'Cập nhật thành công',
            'data' => $collection
        ]);
    }
}
