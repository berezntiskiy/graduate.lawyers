<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

         $this->call(StaffSeeder::class);
         $this->call(BooksSeeder::class);
         $this->call(SectionsSeeder::class);
         $this->call(ChaptersSeeder::class);
         $this->call(ArticlesSeeder::class);
         $this->call(ServicesSeeder::class);
         $this->call(PricesSeeder::class);
         $this->call(AdministratorsSeeder::class);
    }
}
