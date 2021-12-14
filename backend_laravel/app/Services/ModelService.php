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
        return $this->modelRepository->create(array_merge($data, [
            'user_id' => auth()->user()->id
        ]));
    }

    public function handleGetModel($id)
    {
        return $this->modelRepository->find($id);
    }

    public function handleUpdateByName($id, $name)
    {
        return $this->modelRepository->updateByName($id, $name);
    }

    public function handleDestroy($id)
    {
        $this->modelRepository->destroy($id);
    }

    public function handleUpdate($id, $data)
    {
        return $this->modelRepository->update($id, $data);
    }
}
