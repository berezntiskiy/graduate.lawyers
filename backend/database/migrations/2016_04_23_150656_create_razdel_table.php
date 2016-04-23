<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRazdelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('razdeli', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->index();
            $table->string('description')->nullable();
            $table->integer('book_id');
            $table->timestamps();

//            $table->foreign('book_id', 'books.id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('razdeli');
    }
}
