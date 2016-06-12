<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone');
            $table->boolean('isStaff')->index();
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('user_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('user_id')->unsigned();

            $table->string('name')->nullable();
            $table->string('about')->nullable();

            $table->string('locale')->index();

            $table->unique(['user_id','locale']);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

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
        Schema::drop('users');
    }
}
