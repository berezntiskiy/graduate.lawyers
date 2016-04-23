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
            ['login' => 'morphius', 'name' => 'Лоуренсом Фишберном']
        ];
        foreach ($records as $record)
            DB::table('staff')->insert([
//                'login' => $record['login'],
                'name' => $record['name'],
                'email' => $record['name'] . '@gmail.com',
                'password' => Hash::make('123'),
            ]);
    }
}
