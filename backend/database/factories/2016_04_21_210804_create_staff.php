<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStaff extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();

            $table->softDeletes();
        });

        Schema::create('staff_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('staff_id')->unsigned();
            $table->string('name');
            $table->string('locale')->index();

            $table->unique(['staff_id','locale']);
            $table->foreign('staff_id')->references('id')->on('staff')->onDelete('cascade');

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
        Schema::drop('staff');
        Schema::drop('staff_translations');
        Schema::drop('staff_service');
    }
}

