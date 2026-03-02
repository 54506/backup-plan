<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\CareerApplicationMail;
use App\Models\CareerApplication;
use App\Models\JobRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CareerController extends Controller
{
    /**
     * GET /api/job-roles
     * Supports: ?city=Hyderabad &dept=Engineering &q=react
     */
    public function index(Request $request)
    {
        $query = JobRole::active();

        if ($request->filled('city')) {
            $query->where('city', $request->city);
        }

        if ($request->filled('dept')) {
            $query->where('department', $request->dept);
        }

        if ($request->filled('q')) {
            $search = $request->q;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('department', 'like', "%{$search}%");
            });
        }

        return response()->json($query->orderBy('id')->get());
    }

    /**
     * POST /api/careers/apply
     */
    public function apply(Request $request)
    {
        $validated = $request->validate([
            'job_role_id' => 'required|exists:job_roles,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'linkedin_url' => 'nullable|url|max:500',
            'resume_url' => 'nullable|url|max:500',
            'cover_note' => 'nullable|string|max:2000',
        ]);

        $application = CareerApplication::create($validated);
        $application->load('jobRole');

        try {
            Mail::to($validated['email'])
                ->queue(new CareerApplicationMail($application));
        } catch (\Exception $e) {
            \Log::error('Career mail failed: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Application submitted! Our HR team will be in touch within 5 business days.',
        ], 201);
    }
}
