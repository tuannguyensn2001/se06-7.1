<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as BaseModel;

/**
 * @method static isSystemUpload()
 */
class Model extends BaseModel
{
    use HasFactory;

    public function media()
    {
        return $this->belongsTo(Media::class);
    }

    public function scopeIsSystemUpload($query)
    {
        return $query->where('user_upload_type', config('model.user_upload_type.system'));
    }

}
