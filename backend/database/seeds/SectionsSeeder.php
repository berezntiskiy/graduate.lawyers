<?php

use Illuminate\Database\Seeder;

class SectionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            ['name' => 'Название раздела 1', 'description' => 'Описание раздела 1'],
            ['name' => 'Раздел с описанием null', 'description' => null],
            ['name' => 'Название раздела 2', 'description' => 'Описание раздела 2'],
            ['name' => 'Раздел с пустым описанием', 'description' => ''],
            ['name' => 'Название раздела 3', 'description' => 'Описание раздела 3'],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
        ];
        $rCount = count($records);
        for($i = $rCount - 1; $i < $rCount + 10; $i++)
            $records[] = ['name' => 'Название раздела '.$i, 'description' => 'Описание раздела '.$i];

        foreach ($records as $record)
            DB::table('sections')->insert([
                'name' => $record['name'],
                'description' => $record['description'],
                'book_id' => rand(1,3)
            ]);
    }
}
