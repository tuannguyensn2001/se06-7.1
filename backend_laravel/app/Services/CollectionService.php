<?php

namespace App\Services;

use App\Repositories\CollectionRepository;
use Illuminate\Support\Facades\Auth;

class CollectionService
{
    private $repository;

    public function __construct(CollectionRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handleGetCollectionByAuth()
    {
        return $this->repository->findCollectionByUserId(Auth::id());
    }

    public function handleCreate($data)
    {
        return $this->repository->create([
            'name' => $data['name'],
            'description' => $data['description'],
            'user_id' => Auth::id()
        ]);

    }
}
