<?php
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder {

	public function run() {

		$users = array(
			array(
				'email' 	  => 'heisenberg@gmail.com',
				'name'	  => 'heisenberg',
				'password' 	  => Hash::make('heisenberg'),
				'created_at' => new DateTime,
				'updated_at'  => new DateTime
			),
			array(
				'email' 	  => 'pinkman@gmail.com',
				'name'	  => 'pinkman',
				'password' 	  => Hash::make('pinkman'),
				'created_at' => new DateTime,
				'updated_at'  => new DateTime
			),
			array(
				'email' 	  => 'skyler@gmail.com',
				'name'	  => 'skyler',
				'password' 	  => Hash::make('skyler'),
				'created_at' => new DateTime,
				'updated_at'  => new DateTime
			),
			array(
				'email' 	  => 'hank@gmail.com',
				'name'	  => 'hank',
				'password' 	  => Hash::make('hankdea'),
				'created_at' => new DateTime,
				'updated_at'  => new DateTime
			),
			array(
				'email' 	  => 'gusfring@gmail.com',
				'name'	  => 'gusfring',
				'password' 	  => Hash::make('gusfring'),
				'created_at' => new DateTime,
				'updated_at'  => new DateTime
			)
		);

		foreach($users as $user)
			App\User::create($user);
	}
}