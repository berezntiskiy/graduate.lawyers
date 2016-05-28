<?php

use Illuminate\Database\Seeder;

class AdminsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            [
                'email' => 'root@root',
                'password' => Hash::make('root'),
                'name' => 'Mr Root'
            ]
        ];

        foreach ($records as $record)
            \App\Admin::create($record);
    }
}
