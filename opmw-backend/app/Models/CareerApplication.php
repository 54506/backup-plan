<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CareerApplication extends Model
{
    protected $fillable = [
        'job_role_id',
        'name',
        'email',
        'linkedin_url',
        'resume_url',
        'cover_note',
        'status',
    ];

    public function jobRole()
    {
        return $this->belongsTo(JobRole::class);
    }
}
