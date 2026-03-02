<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'category' => 'Outsourcing',
                'title' => 'Business Process Outsourcing',
                'description' => 'End-to-end BPO solutions tailored for enterprise operations — from back-office processing to customer support at scale.',
                'features' => [
                    'Data Entry & Processing',
                    'Finance & Accounting BPO',
                    'HR Administration',
                    'Customer Support Operations',
                    'Claims & Document Processing',
                    'Quality Assurance',
                ],
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Communication',
                'title' => 'Voice Process Operations',
                'description' => 'Multilingual, 24/7 voice operations that deliver exceptional customer experience across inbound, outbound, and blended campaigns.',
                'features' => [
                    'Inbound Customer Support',
                    'Outbound Sales & Lead Gen',
                    'Blended Voice Campaigns',
                    'Multilingual Support (12+ languages)',
                    'IVR & Call Centre Tech',
                    'Real-time Quality Monitoring',
                ],
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'category' => 'Technology',
                'title' => 'Web & App Development',
                'description' => 'Full-stack web and mobile development powered by modern frameworks — from MVPs to enterprise-grade platforms.',
                'features' => [
                    'React / Next.js Frontend',
                    'Node.js / Laravel Backend',
                    'Mobile Apps (React Native)',
                    'Cloud & DevOps (AWS / GCP)',
                    'API Design & Integration',
                    'Performance Optimization',
                ],
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'category' => 'Software',
                'title' => 'HRMS SaaS Platform',
                'description' => 'Our proprietary HR management platform — built for growing teams, packed with attendance, payroll, and workforce analytics.',
                'features' => [
                    'Employee Self-Service Portal',
                    'Attendance & Leave Management',
                    'Payroll Processing',
                    'Performance Reviews',
                    'Recruitment Pipeline',
                    'Workforce Analytics Dashboard',
                ],
                'sort_order' => 4,
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(
                ['title' => $service['title']],
                $service
            );
        }
    }
}
