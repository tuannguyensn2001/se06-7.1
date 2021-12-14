<?php

namespace App\Http\Controllers;

use App\Services\UploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UploadController extends Controller
{

    private $uploadService;

    public function __construct(UploadService $uploadService)
    {
        $this->uploadService = $uploadService;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'file' => 'required|file',
            'type' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->responseBadRequest($validator->errors());
        }

        $file = $request->file('file');

        $type = $request->get('type');

        $url = $this->uploadService->handle($file,$type);

        return $this->response([
            'message' => 'Upload file thành công',
            'data' => $url
        ]);
    }


}
