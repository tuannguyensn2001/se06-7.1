<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Model;
use Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static updateOrCreate(array $array)*@method static create(array$array)
 * @method static create(array $array)
 */
class Tag extends Eloquent
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'tags';

    protected $guarded = ['id'];

    public function model(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Model::class);
    }
}
