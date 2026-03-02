<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CareerController;
use App\Http\Controllers\Api\CaseStudyController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\HrmsDemoController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\ServiceController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| OPMW API Routes
|--------------------------------------------------------------------------
*/

// ── Auth Routes ──────────────────────────────────────────────────────────
Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('reset-password', [AuthController::class, 'resetPassword']);

    // Protected
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('user', [AuthController::class, 'user']);
        Route::post('logout', [AuthController::class, 'logout']);
    });
});

// ── Public Data ───────────────────────────────────────────────────────────
Route::get('services', [ServiceController::class, 'index']);
Route::get('case-studies', [CaseStudyController::class, 'index']);
Route::get('job-roles', [CareerController::class, 'index']);

// ── Form Submissions (rate limited) ───────────────────────────────────────
Route::middleware('throttle:5,1')->group(function () {
    Route::post('contact', [ContactController::class, 'store']);
    Route::post('newsletter/subscribe', [NewsletterController::class, 'subscribe']);
});

Route::middleware('throttle:3,1')->group(function () {
    Route::post('careers/apply', [CareerController::class, 'apply']);
    Route::post('hrms/demo', [HrmsDemoController::class, 'store']);
});
