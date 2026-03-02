<?php

namespace Database\Seeders;

use App\Models\CaseStudy;
use Illuminate\Database\Seeder;

class CaseStudySeeder extends Seeder
{
    public function run(): void
    {
        $studies = [
            [
                'slug' => 'telecom-bpo-transformation',
                'category' => 'BPO',
                'title' => 'Telecom Giant BPO Transformation',
                'client' => 'Confidential — Tier 1 Telecom',
                'industry' => 'Telecommunications',
                'duration' => '18 months',
                'region' => 'India & Southeast Asia',
                'challenge' => 'A leading telecom operator was handling 2M+ monthly customer interactions across fragmented teams, leading to inconsistent service quality, 35% call abandonment rate, and high agent attrition.',
                'solution' => 'OPMW deployed a 650-seat integrated BPO centre with standardised SOP frameworks, AI-assisted call routing, real-time quality dashboards, and a dedicated workforce management team.',
                'results' => [
                    ['metric' => 'Call Abandonment', 'before' => '35%', 'after' => '8%'],
                    ['metric' => 'CSAT Score', 'before' => '61%', 'after' => '89%'],
                    ['metric' => 'Agent Attrition', 'before' => '42%', 'after' => '14%'],
                ],
                'tags' => ['BPO', 'Voice Ops', 'Telecom', 'Workforce Management'],
                'is_active' => true,
            ],
            [
                'slug' => 'fintech-hrms-rollout',
                'category' => 'HRMS',
                'title' => 'FinTech HRMS Platform Rollout',
                'client' => 'Confidential — Series B FinTech',
                'industry' => 'Financial Services',
                'duration' => '6 months',
                'region' => 'UAE & India',
                'challenge' => 'A rapidly growing FinTech with 800 employees across 3 countries was managing HR on spreadsheets, leading to payroll errors, compliance issues, and zero visibility on workforce data.',
                'solution' => 'OPMW implemented its HRMS SaaS across all entities — automated payroll processing, leave and attendance tracking, compliance reporting, and a unified employee self-service portal.',
                'results' => [
                    ['metric' => 'Payroll Errors', 'before' => '12% monthly', 'after' => '0.1%'],
                    ['metric' => 'HR Admin Time', 'before' => '160 hrs/month', 'after' => '18 hrs/month'],
                    ['metric' => 'Compliance Score', 'before' => '64%', 'after' => '99%'],
                ],
                'tags' => ['HRMS', 'Payroll', 'FinTech', 'Compliance'],
                'is_active' => true,
            ],
            [
                'slug' => 'ecommerce-voice-ops',
                'category' => 'Voice Ops',
                'title' => 'E-Commerce Scale-Up: 24/7 Voice Ops',
                'client' => 'Confidential — E-Commerce Marketplace',
                'industry' => 'E-Commerce & Retail',
                'duration' => '12 months',
                'region' => 'India (Pan-India)',
                'challenge' => 'A high-growth e-commerce platform needed to scale customer support from 50 to 500 agents in 90 days during a peak season, maintaining quality across returns, escalations, and delivery queries.',
                'solution' => 'OPMW staffed and trained 500 agents in 60 days using its rapid onboarding framework, integrated with the client\'s existing CRM, and deployed real-time CSAT monitoring and dynamic scripting tools.',
                'results' => [
                    ['metric' => 'Scale Timeline', 'before' => 'Target: 90 days', 'after' => 'Achieved in 60 days'],
                    ['metric' => 'First Contact Resolution', 'before' => '55%', 'after' => '82%'],
                    ['metric' => 'Average Handle Time', 'before' => '9.2 min', 'after' => '5.8 min'],
                ],
                'tags' => ['Voice Ops', 'E-Commerce', 'Scale-Up', 'Customer Experience'],
                'is_active' => true,
            ],
            [
                'slug' => 'healthcare-voice-compliance',
                'category' => 'Voice Ops',
                'title' => 'Healthcare Voice Operations & Compliance',
                'client' => 'Confidential — Pan-India Healthcare Network',
                'industry' => 'Healthcare',
                'duration' => '24 months (ongoing)',
                'region' => 'India',
                'challenge' => 'A healthcare network with 300+ clinics needed compliant, empathetic voice support for appointment scheduling, prescription queries, and emergency triage — across 8 regional languages.',
                'solution' => 'OPMW built a dedicated healthcare voice team with HIPAA-aligned processes, multilingual support in 8 languages, structured triage protocols, and integration with the client\'s appointment management system.',
                'results' => [
                    ['metric' => 'Appointment No-Show Rate', 'before' => '28%', 'after' => '9%'],
                    ['metric' => 'Languages Supported', 'before' => '2', 'after' => '8'],
                    ['metric' => 'Patient CSAT', 'before' => '70%', 'after' => '94%'],
                ],
                'tags' => ['Voice Ops', 'Healthcare', 'Compliance', 'Multilingual'],
                'is_active' => true,
            ],
        ];

        foreach ($studies as $study) {
            CaseStudy::updateOrCreate(
                ['slug' => $study['slug']],
                $study
            );
        }
    }
}
