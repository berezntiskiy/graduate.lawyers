<?php

use Illuminate\Database\Seeder;

class BooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            ['name' => 'Название книги 1', 'description' => 'Описание книги 1'],
            ['name' => 'Книга с описанием null', 'description' => null],
            ['name' => 'Название книги 2', 'description' => 'Описание книги 2'],
            ['name' => 'Книга с пустым описанием', 'description' => ''],
            ['name' => 'Название книги 3', 'description' => 'Описание книги 3'],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
        ];
        $rCount = count($records);
        for($i = $rCount - 1; $i < $rCount + 10; $i++)
            $records[] = ['name' => 'Название книги '.$i, 'description' => 'Описание книги '.$i];

        foreach ($records as $record)
            DB::table('books')->insert([
                'name' => $record['name'],
                'description' => $record['description']
            ]);
    }
}
