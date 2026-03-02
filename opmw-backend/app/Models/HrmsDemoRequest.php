<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HrmsDemoRequest extends Model
{
    protected $fillable = [
        'name',
        'email',
        'company',
        'team_size',
        'message',
        'status',
    ];
}
