<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobRole extends Model
{
    protected $fillable = [
        'title',
        'department',
        'city',
        'type',
        'is_remote',
        'is_active',
    ];

    protected $casts = [
        'is_remote' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function applications()
    {
        return $this->hasMany(CareerApplication::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
