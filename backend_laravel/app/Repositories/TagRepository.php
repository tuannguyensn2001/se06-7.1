<?php

namespace App\Repositories;

use App\Models\Tag;

class TagRepository
{
    public function sync($tags, $model_id, $user_id)
    {
        foreach ($tags as $tag) {
            $check = Tag::withTrashed()
                ->where([
                    ['name', '=', $tag],
                    ['user_id', '=', $user_id],
                    ['model_id', '=', $model_id]
                ])
                ->first();

            if (is_null($check)) {
                Tag::create([
                    'name' => $tag,
                    'model_id' => $model_id,
                    'user_id' => $user_id
                ]);
            } else {
                $check->restore();
            }

        }

        Tag::where('model_id', $model_id)
            ->where('user_id', $user_id)
            ->whereNotIn('name', $tags)
            ->delete();
    }

    public function getByUserId($user_id)
    {
        return Tag::withTrashed()->where('user_id', $user_id)
            ->select('name')
            ->distinct()
            ->get();
    }
}
