<?php

namespace App\Http\Controllers;

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
}
