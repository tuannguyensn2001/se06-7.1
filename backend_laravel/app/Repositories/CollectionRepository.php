<?php

namespace App\Repositories;

use App\Models\Collection;

class CollectionRepository
{
    public function findCollectionByUserId($user_id)
    {
        return Collection::where('user_id', $user_id)->get();
    }

    public function create($data)
    {
        return Collection::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'user_id' => $data['user_id']
        ]);
    }
}
