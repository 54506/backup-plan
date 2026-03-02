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

        .badge {
            display: inline-block;
            background: #EFF6FF;
            color: #2F80ED;
            border-radius: 4px;
            padding: 4px 10px;
            font-size: 12px;
            font-weight: bold;
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
        <h2>🎉 Application Received!</h2>
        <p>Hi <strong>{{ $application->name }}</strong>, we've received your application and our HR team will review it
            shortly.</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">

        <div class="label">Applied Role</div>
        <div class="value"><strong>{{ $application->jobRole->title }}</strong></div>

        <div class="label">Department</div>
        <div class="value">{{ $application->jobRole->department }}</div>

        <div class="label">Location</div>
        <div class="value">
            {{ $application->jobRole->city }}{{ $application->jobRole->is_remote ? ' · Remote Eligible' : '' }}</div>

        <p>We aim to review all applications within <strong>5 business days</strong>. If shortlisted, our team will
            reach out directly.</p>

        <div class="footer">
            © {{ date('Y') }} OPMW · <a href="https://opmw.io/careers">View Open Roles</a>
        </div>
    </div>
</body>

</html>