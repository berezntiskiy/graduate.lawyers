<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function(Blueprint $table)
        {
            $table->increments('id');
            $table->timestamps();

            $table->boolean('naturalperson');
            $table->integer('price_start');
            $table->integer('price_end');

            $table->softDeletes();
        });

        Schema::create('service_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('service_id')->unsigned();

            $table->string('title')->index();
            $table->mediumText('text');

            $table->string('locale')->index();

            $table->unique(['service_id','locale']);
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');

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
        Schema::drop('services');
        Schema::drop('service_translations');
    }
}
