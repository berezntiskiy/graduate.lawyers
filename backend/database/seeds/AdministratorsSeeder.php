<?php

use Illuminate\Database\Seeder;
use SleepingOwl\AdminAuth\Entities\Administrator;

class AdministratorsSeeder extends Seeder
{
    public function run()
    {
        Administrator::truncate();

        $default = [
            'username' => 'admin',
            'password' => '123',
            'name'     => 'Vlad Bereznitskiy'
        ];

        try
        {
            Administrator::create($default);
        } catch (\Exception $e)
        {
        }
    }

}