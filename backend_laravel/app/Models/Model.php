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

    public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class,'user_model')->withPivot([
            'name',
            'base_color',
            'disable_zoom',
            'camera_controls',
            'auto_rotate',
            'poster',
            'skybox',
            'auto_rotate_delay',
            'camera_orbit',
            'camera_target',
            'rotation_per_second',
            'interaction_policy',
            'field_of_view',
            'max_camera_orbit',
            'min_camera_orbit',
            'max_field_of_view',
            'min_field_of_view',
            'interpolation_decay',
            'orientation',
            'scale',
            'metal_ness',
            'rough_ness',
            'exposure',
            'shadow_intensity',
            'env_image'
        ]);
    }
}
