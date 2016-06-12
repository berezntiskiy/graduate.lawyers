<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function(Blueprint $table)
        {
            $table->increments('id');
            $table->timestamps();

            $table->integer('price_min');
            $table->integer('price_max');

            $table->softDeletes();
        });

        Schema::create('price_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('price_id')->unsigned();

            $table->string('title')->index();
            $table->mediumText('text');

            $table->string('locale')->index();

            $table->unique(['price_id','locale']);
            $table->foreign('price_id')->references('id')->on('prices')->onDelete('cascade');

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
        Schema::drop('prices');
        Schema::drop('price_translations');
    }
}