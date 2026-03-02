<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactConfirmationMail;
use App\Models\ContactInquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'inquiry_type' => 'required|string|max:255',
            'message' => 'required|string|min:10',
        ]);

        $validated['ip_address'] = $request->ip();

        $inquiry = ContactInquiry::create($validated);

        // Send confirmation to sender + copy to admin
        try {
            Mail::to($validated['email'])
                ->cc(config('mail.admin_email', env('ADMIN_EMAIL')))
                ->send(new ContactConfirmationMail($inquiry));
        } catch (\Exception $e) {
            \Log::error('Contact mail failed: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Your message has been received. We\'ll get back to you within 2 hours.',
        ], 201);
    }
}
