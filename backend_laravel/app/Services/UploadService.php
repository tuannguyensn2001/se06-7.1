<?php

namespace App\Services;

use App\Models\Media;
use App\Repositories\MediaRepository;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadService
{
    private $mediaRepository;

    public function __construct(MediaRepository $mediaRepository)
    {
        $this->mediaRepository = $mediaRepository;
    }

    public function handle($file, $type): Media
    {
        $originalName = $file->getClientOriginalName();

        $name = Str::uuid() . '-' . $file->getClientOriginalName();

        $path = Storage::putFileAs('public/' . $type, $file, $name);

        return $this->mediaRepository->create([
            'name' => $name,
            'original_name' => $originalName,
            'type' => $type,
            'user_id' => auth()->id(),
            'path' => $path,
            'disk' => 'local'
        ]);
    }
}
