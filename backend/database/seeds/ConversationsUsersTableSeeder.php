<?php
use Illuminate\Database\Seeder;

class ConversationsUsersTableSeeder extends Seeder {

	public function run() {

		DB::table('conversations_users')->delete();

		$user1 = App\User::findOrFail(1);
		$user2 = App\User::findOrFail(2);
		$user3 = App\User::findOrFail(3);
		$user4 = App\User::findOrFail(4);

		$conversation1 = DB::table('conversations')->where('author_id', $user1->id)->first();
//		$conversation2 = DB::table('conversations')->where('author_id', $user3->id)->first();
		$conversation2 = $conversation1;

		$conversations_users = array(
			array(
				'user_id' 		  => $user1->id,
				'conversation_id' => $conversation1->id
			),
			array(
				'user_id' 		  => $user2->id,
				'conversation_id' => $conversation1->id
			),
			array(
				'user_id' 		  => $user1->id,
				'conversation_id' => $conversation2->id
			),
			array(
				'user_id' 		  => $user3->id,
				'conversation_id' => $conversation2->id
			),
			array(
				'user_id' 		  => $user4->id,
				'conversation_id' => $conversation2->id
			)
		);


		DB::table('conversations_users')->insert($conversations_users);
	}
}