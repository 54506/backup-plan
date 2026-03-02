<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactInquiry extends Model
{
    protected $fillable = [
        'name',
        'email',
        'company',
        'inquiry_type',
        'message',
        'ip_address',
    ];
}
