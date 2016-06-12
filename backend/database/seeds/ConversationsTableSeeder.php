<?php
use Illuminate\Database\Seeder;

class ConversationsTableSeeder extends Seeder {
	
	public function run() {

		DB::table('conversations')->delete();

		$user1 = \App\User::findOrFail(1);
//		$user2 = \App\User::findOrFail(2);

		$conversations = array(
			array(
				'created_at' => new DateTime,
				'name' 		 => 'Room #1: '.str_random(30),
				'author_id'  => $user1->id
			),
//			array(
//				'created_at' => new DateTime,
//				'name' 		 => 'Room #2: '.str_random(30),
//				'author_id'  => $user2->id
//			)
		);

		DB::table('conversations')->insert($conversations);
	}
}