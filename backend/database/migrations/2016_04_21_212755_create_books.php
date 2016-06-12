<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function(Blueprint $table)
        {
            $table->increments('id');
            $table->timestamps();

            $table->softDeletes();
        });

        Schema::create('book_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('book_id')->unsigned();

            $table->string('name')->index();
            $table->string('description')->nullable();

            $table->string('locale')->index();

            $table->unique(['book_id','locale']);
            $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('books');
        Schema::drop('book_translations');
    }
}
