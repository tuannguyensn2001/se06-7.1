<?php

namespace App\Http\Controllers;

use App\Models\Model;
use Illuminate\Http\Request;

class ModelPublishController extends Controller
{
    public function show($id): \Illuminate\Http\JsonResponse
    {
        return $this->response([
            'data' => Model::find($id)
        ]);
    }
}
