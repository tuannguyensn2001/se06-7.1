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
}
