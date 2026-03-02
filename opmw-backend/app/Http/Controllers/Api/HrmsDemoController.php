<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\HrmsDemoMail;
use App\Models\HrmsDemoRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HrmsDemoController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'team_size' => 'nullable|string|max:50',
            'message' => 'nullable|string|max:2000',
        ]);

        $demo = HrmsDemoRequest::create($validated);

        try {
            Mail::to($validated['email'])
                ->cc(config('mail.admin_email', env('ADMIN_EMAIL')))
                ->send(new HrmsDemoMail($demo));
        } catch (\Exception $e) {
            \Log::error('HRMS demo mail failed: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Demo request received! Our team will contact you within 24 hours to schedule.',
        ], 201);
    }
}
