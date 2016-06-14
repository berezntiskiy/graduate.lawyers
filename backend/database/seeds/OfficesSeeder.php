<?php

use Illuminate\Database\Seeder;

class OfficesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
        ];

        for ($i = 1; $i < 10; $i++)
            $records[] = [
                'lat' => 10 * $i,
                'lng' => 10 * $i,
                'name' => 'name #' . $i,
                'phone' => $i.'('.$i.')'.$i.$i.$i.$i.$i.$i.$i,
                'address' => 'address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i.' address ' . $i
            ];


        foreach ($records as $record)
            \App\Office::create($record);
    }
}
