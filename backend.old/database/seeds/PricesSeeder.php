<?php

use Illuminate\Database\Seeder;

class PricesSeeder extends Seeder
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
                'price_min' => 1000,
                'price_max' => 2500,
                'title' => 'Услуга 1',
                'text' => 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.'
            ],
            [
                'price_min' => 5000,
                'price_max' => 7500,
                'title' => 'Услуга 2',
                'text' => 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.'
            ],

        ];


        foreach ($records as $record)
            \App\Price::create([
                'price_min' => $record['price_min'],
                'price_max' => $record['price_max'],
                'ru' => [
                    'title' => $record['title'],
                    'text' => $record['text']
                ],
                'en' => [
                    'title' => get_in_translate_to_en($record['title']),
                    'text' => get_in_translate_to_en($record['text'])
                ],
                'md' => [
                    'title' => get_in_translate_to_en($record['title']),
                    'text' => get_in_translate_to_en($record['text'])
                ],
            ]);
    }
}
