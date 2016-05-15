<?php

use Illuminate\Database\Seeder;

class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            ['name' => 'Название статьи 1', 'description' => 'Описание статьи 1'],
            ['name' => 'Название статьи 2', 'description' => 'Описание статьи 2'],
            ['name' => 'Статья с пустым описанием', 'description' => ''],
            ['name' => 'Название статьи 3', 'description' => 'Описание статьи 3'],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
//            ['name' => '', 'description' => ''],
        ];
        $rCount = count($records);
        for($i = $rCount - 1; $i < $rCount + 70; $i++)
            $records[] = ['name' => 'Название статьи '.$i, 'description' => 'Описание статьи '.$i];

        foreach ($records as $record)
            \App\Article::create([
                'title' => $record['name'],
                'text' => $record['description'],
                'chapter_id' => rand(1,3)
            ]);
    }
}
