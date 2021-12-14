<?php

namespace App\Services;

use App\Repositories\ModelRepository;

class BaseModelService
{
    private $repository;

    public function __construct(ModelRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handleGetBaseModel()
    {
        return $this->repository->getBaseModels();
    }

    public function handleShowBaseModel($id)
    {
        return $this->repository->showBaseModel($id);
    }

}
