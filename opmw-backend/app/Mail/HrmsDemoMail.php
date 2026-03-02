<?php

namespace App\Mail;

use App\Models\HrmsDemoRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class HrmsDemoMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public HrmsDemoRequest $demo)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(subject: 'HRMS Demo Request Received — OPMW');
    }

    public function content(): Content
    {
        return new Content(view: 'emails.hrms-demo');
    }

    public function attachments(): array
    {
        return [];
    }
}
