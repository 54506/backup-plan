<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;

class CaseStudyController extends Controller
{
    public function index()
    {
        return response()->json(
            CaseStudy::active()->orderBy('id')->get()
        );
    }
}
