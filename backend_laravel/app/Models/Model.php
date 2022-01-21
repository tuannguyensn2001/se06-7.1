<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as LaravelModel;

/**
 * @method static create(array $array)
 * @method static find($id)
 * @method static where(string $string, $id)
 */
class Model extends LaravelModel
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'models';

    protected $casts = [
        'base_color' => 'array',
        'disable_zoom' => 'boolean',
        'camera_controls' => 'boolean',
        'auto_rotate' => 'boolean',
        'auto_rotate_delay' => 'array',
        'camera_orbit' => 'array',
        'camera_target' => 'array',
        'rotation_per_second' => 'array',
        'field_of_view' => 'array',
        'max_camera_orbit' => 'array',
        'min_camera_orbit' => 'array',
        'max_field_of_view' => 'array',
        'min_field_of_view' => 'array',
        'interpolation_decay' => 'array',
        'orientation' => 'array',
        'scale' => 'array',
        'metal_ness' => 'array',
        'rough_ness' => 'array',
        'exposure' => 'array',
        'shadow_intensity' => 'array',
        'can_download' => 'boolean'
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function tags(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Tag::class);
    }

    public function comments(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function collections(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Collection::class, 'collection_model');
    }

}
