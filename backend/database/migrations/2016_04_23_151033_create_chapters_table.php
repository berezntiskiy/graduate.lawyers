<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChaptersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chapters', function(Blueprint $table)
        {
            $table->increments('id');
            $table->timestamps();

            $table->integer('section_id')->unsigned();
            $table->foreign('section_id')->references('id')->on('sections');

            $table->softDeletes();
        });

        Schema::create('chapter_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('chapter_id')->unsigned();

            $table->string('name')->index();
            $table->string('description')->nullable();

            $table->string('locale')->index();

            $table->unique(['chapter_id','locale']);
            $table->foreign('chapter_id')->references('id')->on('chapters')->onDelete('cascade');

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
        Schema::drop('chapters');
        Schema::drop('chapter_translations');
    }
}
