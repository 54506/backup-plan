<?php

namespace App\Mail;

use App\Models\CareerApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CareerApplicationMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public CareerApplication $application)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(subject: 'Application Received — OPMW');
    }

    public function content(): Content
    {
        return new Content(view: 'emails.career-application');
    }

    public function attachments(): array
    {
        return [];
    }
}
