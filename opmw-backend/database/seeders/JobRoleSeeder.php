<?php

namespace Database\Seeders;

use App\Models\JobRole;
use Illuminate\Database\Seeder;

class JobRoleSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            ['title' => 'Senior React Engineer', 'department' => 'Engineering', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => false],
            ['title' => 'BPO Operations Manager', 'department' => 'Operations', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => false],
            ['title' => 'Voice Process Lead', 'department' => 'Voice Ops', 'city' => 'Dubai', 'type' => 'Full-time', 'is_remote' => false],
            ['title' => 'Node.js Backend Engineer', 'department' => 'Engineering', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => true],
            ['title' => 'HRMS Product Manager', 'department' => 'Product', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => true],
            ['title' => 'Enterprise Sales Executive', 'department' => 'Sales', 'city' => 'London', 'type' => 'Full-time', 'is_remote' => false],
            ['title' => 'UI/UX Designer', 'department' => 'Design', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => true],
            ['title' => 'DevOps / Cloud Engineer', 'department' => 'Engineering', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => true],
            ['title' => 'Quality Assurance Analyst', 'department' => 'Operations', 'city' => 'Dubai', 'type' => 'Full-time', 'is_remote' => false],
            ['title' => 'Customer Success Manager', 'department' => 'Success', 'city' => 'Singapore', 'type' => 'Full-time', 'is_remote' => false],
            ['title' => 'HR Business Partner', 'department' => 'HR', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => false],
            ['title' => 'Data Analyst — Workforce Intelligence', 'department' => 'Analytics', 'city' => 'Hyderabad', 'type' => 'Full-time', 'is_remote' => true],
        ];

        foreach ($roles as $role) {
            JobRole::updateOrCreate(
                ['title' => $role['title']],
                array_merge($role, ['is_active' => true])
            );
        }
    }
}
