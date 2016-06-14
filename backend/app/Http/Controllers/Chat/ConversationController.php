<?php
namespace App\Http\Controllers\Chat;

use App\Conversation;
use App\Events\ChatConversationsEvent;
use App\Http\Controllers\RestController;
use App\User;
use Illuminate\Support\Facades\Auth;

class ConversationController extends RestController {

    /**
     * Display a listing of conversations.
     *
     * @return Response
     */
    public function index()
    {
        return auth()->user()->conversations()->with('users')->get();
    }

    /**
     * Store a newly created conversation in storage.
     *
     * @return Response
     */
    public function store()
    {

        $params = array(
            'created_at' => new \DateTime(),
            'name'          => $this->request->get('name'),
            'author_id'  => Auth::user()->id
        );

        $conversation = Conversation::create($params);

        $staffId = +$this->request->get('staffId');
        if($staffId < 1) $staffId = User::where('isStaff', true)->orderByRaw("RAND()")->first()->id;

        $conversation->users()->attach($staffId);
        $conversation->users()->attach(array(Auth::user()->id));


        $conv = Conversation::with('users')->findOrFail($conversation->id);

        event(new ChatConversationsEvent($conversation->id, $conv));
        return $conv;
    }
}
