<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOfficesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offices', function(Blueprint $table)
        {
            $table->increments('id');
            $table->timestamps();
            $table->float('lat');
            $table->float('lng');

            $table->softDeletes();
            $table->integer('created_by')->unsigned()->nullable();
            $table->foreign('created_by')->references('id')->on('administrators');
            $table->integer('updated_by')->unsigned()->nullable();
            $table->foreign('updated_by')->references('id')->on('administrators');
            $table->integer('deleted_by')->unsigned()->nullable();
            $table->foreign('deleted_by')->references('id')->on('administrators');
        });

        Schema::create('office_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('office_id')->unsigned();

            $table->string('name')->index();
            $table->string('address');

            $table->string('locale')->index();

            $table->unique(['office_id','locale']);
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');

            $table->softDeletes();
            $table->integer('created_by')->unsigned()->nullable();
            $table->foreign('created_by')->references('id')->on('administrators');
            $table->integer('updated_by')->unsigned()->nullable();
            $table->foreign('updated_by')->references('id')->on('administrators');
            $table->integer('deleted_by')->unsigned()->nullable();
            $table->foreign('deleted_by')->references('id')->on('administrators');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('offices');
        Schema::drop('office_translations');
    }
}
