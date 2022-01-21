<?php

namespace App\Http\Controllers;

use App\Services\TagService;
use Illuminate\Http\Request;

class TagController extends Controller
{

    private $service;

    public function __construct(TagService $service)
    {
        $this->service = $service;
    }

    public function own(): \Illuminate\Http\JsonResponse
    {
        $result = $this->service->handleGetOwn();
        return $this->response([
            'message' => 'Lấy message thành công',
            'data' => $result
        ]);
    }
}
