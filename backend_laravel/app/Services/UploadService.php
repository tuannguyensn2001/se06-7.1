<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadService
{
    public function handle($file, $type): string
    {
        $result = Storage::putFileAs('public/'.$type, $file, Str::uuid().'-'.$file->getClientOriginalName());

        return asset(Storage::url($result));
    }
}
