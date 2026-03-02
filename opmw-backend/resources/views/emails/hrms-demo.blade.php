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
            margin-top: 16px;
        }

        .value {
            color: #222;
            margin-bottom: 4px;
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
        <h2>📅 Demo Request Received!</h2>
        <p>Hi <strong>{{ $demo->name }}</strong>, thanks for your interest in the OPMW HRMS platform!</p>
        <p>Our product team will reach out within <strong>24 hours</strong> to schedule a personalized demo at your
            convenience.</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">

        <div class="label">Company</div>
        <div class="value">{{ $demo->company ?? 'N/A' }}</div>

        <div class="label">Team Size</div>
        <div class="value">{{ $demo->team_size ?? 'N/A' }}</div>

        @if($demo->message)
            <div class="label">Your Note</div>
            <div class="value">{{ $demo->message }}</div>
        @endif

        <div class="footer">
            © {{ date('Y') }} OPMW · <a href="https://opmw.io/hrms">HRMS Platform</a>
        </div>
    </div>
</body>

</html>