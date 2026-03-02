<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    protected $fillable = [
        'slug',
        'category',
        'title',
        'client',
        'industry',
        'duration',
        'region',
        'challenge',
        'solution',
        'results',
        'tags',
        'is_active',
    ];

    protected $casts = [
        'results' => 'array',
        'tags' => 'array',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
