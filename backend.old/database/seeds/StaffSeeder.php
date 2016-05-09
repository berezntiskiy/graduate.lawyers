<?php

use Illuminate\Database\Seeder;
use Illuminate\Hashing\BcryptHasher;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            ['login' => 'admin', 'name' => 'Админ Админович'],
            ['login' => 'karl', 'name' => 'Бэр, Карл Эрнст фон'],
            ['login' => 'morphius', 'name' => 'Лоренс Фишбёрн']
        ];
        foreach ($records as $record)
            \App\Staff::create([
//                'login' => $record['login'],
                'name' => $record['name'],
                'email' => $record['login'] . '@gmail.com',
                'password' => Hash::make('123'),
            ]);
    }
}
