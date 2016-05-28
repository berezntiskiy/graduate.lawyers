<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdministratorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('administrators', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('email')->unique();
			$table->string('password');
			$table->string('name');
			$table->string('remember_token')->nullable();
			
			$table->softDeletes();
			$table->integer('created_by')->unsigned()->nullable();
			$table->foreign('created_by')->references('id')->on('administrators');
			$table->integer('updated_by')->unsigned()->nullable();
			$table->foreign('updated_by')->references('id')->on('administrators');
			$table->integer('deleted_by')->unsigned()->nullable();
			$table->foreign('deleted_by')->references('id')->on('administrators');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('administrators');
	}

}
