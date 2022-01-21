<?php

namespace App\Services;

use App\Repositories\ModelRepository;
use App\Repositories\TagRepository;
use Illuminate\Support\Facades\Auth;

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
        return $this->modelRepository->find($id)->load('tags','user','collections');
    }

    public function handleUpdateByName($id, $name)
    {
        return $this->modelRepository->updateByName($id, $name);
    }

    public function handleDestroy($id)
    {
        $this->modelRepository->destroy($id);
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function handleUpdate($id, $data)
    {
        $tagRepository = app()->make(TagRepository::class);
        $tagRepository->sync($data['tags'], $id, Auth::id());
        return $this->modelRepository->update($id, $data);
    }

    public function handlePublish($id)
    {
        return $this->modelRepository->publish($id);
    }

    public function handlePrivate($id)
    {
        return $this->modelRepository->private($id);
    }
}
