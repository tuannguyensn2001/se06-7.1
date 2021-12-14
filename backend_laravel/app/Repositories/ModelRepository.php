<?php

namespace App\Repositories;

use App\Models\Model;

class ModelRepository
{
    public function getBaseModels()
    {
        return Model::with('media')->isSystemUpload()->get();
    }

    public function showBaseModel($id)
    {
        return Model::with('media')->where('id', $id)->isSystemUpload()->first();
    }

    public function create($data)
    {
        return Model::create([
            'name' => $data['name'],
            'model' => $data['model'],
            'user_id' => $data['user_id']
        ]);
    }
}
