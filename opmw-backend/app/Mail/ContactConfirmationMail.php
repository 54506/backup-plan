<?php

namespace App\Mail;

use App\Models\ContactInquiry;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public ContactInquiry $inquiry)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(subject: 'We received your message — OPMW');
    }

    public function content(): Content
    {
        return new Content(view: 'emails.contact-confirmation');
    }

    public function attachments(): array
    {
        return [];
    }
}
