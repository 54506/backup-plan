<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        .card {
            background: #ffffff;
            border-radius: 8px;
            padding: 32px;
            max-width: 560px;
            margin: 0 auto;
        }

        h2 {
            color: #03142A;
            margin-top: 0;
        }

        p {
            color: #444;
            line-height: 1.6;
        }

        .label {
            color: #888;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .value {
            color: #222;
            margin-bottom: 16px;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            margin-top: 24px;
        }
    </style>
</head>

<body>
    <div class="card">
        <h2>✅ We received your message!</h2>
        <p>Hi <strong>{{ $inquiry->name }}</strong>, thank you for reaching out to OPMW. Our team will get back to you
            within <strong>2 hours</strong>.</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">

        <div class="label">Your Inquiry</div>
        <div class="value">{{ $inquiry->inquiry_type }}</div>

        <div class="label">Message</div>
        <div class="value">{{ $inquiry->message }}</div>

        <p>In the meantime, feel free to explore our <a href="https://opmw.io/services">services</a> or <a
                href="https://opmw.io/projects">case studies</a>.</p>

        <div class="footer">
            © {{ date('Y') }} OPMW · <a href="https://opmw.io">opmw.io</a>
        </div>
    </div>
</body>

</html>