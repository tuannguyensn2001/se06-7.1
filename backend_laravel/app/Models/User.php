<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * @method static create($data)
 */
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function models(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
//        return $this->belongsToMany(Model::class,'user_model')->withPivot([
//            'name',
//            'base_color',
//            'disable_zoom',
//            'camera_controls',
//            'auto_rotate',
//            'poster',
//            'skybox',
//            'auto_rotate_delay',
//            'camera_orbit',
//            'camera_target',
//            'rotation_per_second',
//            'interaction_policy',
//            'field_of_view',
//            'max_camera_orbit',
//            'min_camera_orbit',
//            'max_field_of_view',
//            'min_field_of_view',
//            'interpolation_decay',
//            'orientation',
//            'scale',
//            'metal_ness',
//            'rough_ness',
//            'exposure',
//            'shadow_intensity',
//            'env_image'
//        ]);
        return $this->hasMany(Model::class);
    }

    public function comments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
