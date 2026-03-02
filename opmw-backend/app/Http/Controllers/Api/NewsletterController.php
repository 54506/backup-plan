<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255',
        ]);

        $subscriber = NewsletterSubscriber::firstOrCreate(
            ['email' => $request->email],
            ['is_active' => true, 'subscribed_at' => now()]
        );

        if (!$subscriber->wasRecentlyCreated) {
            // Already subscribed — reactivate if they had unsubscribed
            if (!$subscriber->is_active) {
                $subscriber->update(['is_active' => true]);
            }
        }

        return response()->json([
            'message' => 'You\'re subscribed! Welcome to the OPMW community.',
        ], 200);
    }
}
