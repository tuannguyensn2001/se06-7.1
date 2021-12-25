<?php

namespace App\Repositories;

use App\Models\Media;
use Illuminate\Support\Arr;

class MediaRepository
{
    public function create($data)
    {
        $update = Arr::only($data, ['name', 'original_name', 'type', 'user_id', 'path', 'disk']);

        $media = Media::create($update);

        return $media;
    }
}
