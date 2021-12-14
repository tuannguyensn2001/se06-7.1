<?php

namespace App\Services;

use App\Repositories\ModelRepository;

class ModelService
{
    private $modelRepository;

    public function __construct(ModelRepository $modelRepository)
    {
        $this->modelRepository = $modelRepository;
    }

    public function handleGetModels()
    {
        return auth()->user()->models;
    }

    public function handleCreate($data)
    {
        return $this->modelRepository->create(array_merge($data,[
            'user_id' => auth()->user()->id
        ]));
    }
}
