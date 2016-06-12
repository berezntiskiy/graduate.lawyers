<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function(Blueprint $table)
        {
            $table->increments('id');
            $table->timestamps();
            
            $table->integer('book_id')->unsigned();
            $table->foreign('book_id')->references('id')->on('books');

            $table->softDeletes();
        });

        Schema::create('section_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('section_id')->unsigned();

            $table->string('name')->index();
            $table->string('description')->nullable();

            $table->string('locale')->index();

            $table->unique(['section_id','locale']);
            $table->foreign('section_id')->references('id')->on('sections')->onDelete('cascade');

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
        Schema::drop('sections');
        Schema::drop('section_translations');
    }
}
