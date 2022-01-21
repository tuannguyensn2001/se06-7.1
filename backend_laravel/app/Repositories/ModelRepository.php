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
            'user_id' => $data['user_id'],
            'skybox' => $data['skybox'],
            'preview' => $data['preview'],
            'disable_zoom' => $data['disable_zoom'],
            'camera_controls' => $data['camera_control'],
            'auto_rotate' => $data['auto_rotate'],
            'auto_rotate_delay' => $data['auto_rotate_delay'],
            'rotation_per_second' => $data['rotation_per_second'],
//            'interaction_policy' => $data['interaction_policy'],
            'field_of_view' => $data['field_of_view'],
            'max_field_of_view' => $data['max_field_of_view'],
            'min_field_of_view' => $data['min_field_of_view'],
            'interpolation_decay' => $data['interpolation_decay']
        ]);
    }

    public function find($id)
    {
        return Model::find($id);
    }


    public function updateByName($id, $name)
    {
        $model = Model::find($id);
        $model->name = $name;
        $model->save();
        return $model;
    }

    public function destroy($id): int
    {
        return Model::destroy($id);
    }

    public function update($id, $data)
    {
        return Model::where('id', $id)
            ->update([
                'name' => $data['name'],
                'model' => $data['model'],
                'skybox' => $data['skybox'],
                'preview' => $data['preview'],
                'disable_zoom' => $data['disable_zoom'],
                'camera_controls' => $data['camera_control'],
                'auto_rotate' => $data['auto_rotate'],
                'auto_rotate_delay' => $data['auto_rotate_delay'],
                'rotation_per_second' => $data['rotation_per_second'],
//            'interaction_policy' => $data['interaction_policy'],
                'field_of_view' => $data['field_of_view'],
                'max_field_of_view' => $data['max_field_of_view'],
                'min_field_of_view' => $data['min_field_of_view'],
                'interpolation_decay' => $data['interpolation_decay'],
                'can_download' => $data['can_download']
            ]);
    }

    public function publish($id)
    {
        return Model::where('id', $id)
            ->update(['is_publish' => 1]);
    }

    public function private($id)
    {
        return Model::where('id', $id)
            ->update(['is_publish', 0]);
    }
}
