<?php

use App\Chapter;
use Illuminate\Database\Seeder;

class ChaptersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            ['name' => 'Название главы 1', 'description' => 'Описание главы 1'],
            ['name' => 'Глава с описанием null', 'description' => null],
            ['name' => 'Название главы 2', 'description' => 'Описание главы 2'],
            ['name' => 'Глава с пустым описанием', 'description' => ''],
            ['name' => 'Название главы 3', 'description' => 'Описание главы 3'],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
        ];
        $rCount = count($records);
        for($i = $rCount - 1; $i < $rCount + 10; $i++)
            $records[] = ['name' => 'Название главы '.$i, 'description' => 'Описание главы '.$i];

        foreach ($records as $record)
            Chapter::create([
                'name' => $record['name'],
                'description' => $record['description'],
                'section_id' => rand(1,3)
            ]);
    }
}
