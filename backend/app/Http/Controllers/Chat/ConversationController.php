<?php
namespace App\Http\Controllers\Chat;

use App\Conversation;
use App\Events\ChatConversationsEvent;
use App\Http\Controllers\RestController;
use App\MessageNotification;
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
        return auth()->user()->conversations()->with('users')
            ->get();
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
        $toNotify = [];
        $toNotify[] = $conv['author_id'];
        foreach ($conv['users'] as $user)
            $toNotify[] = $user['id'];
        foreach($toNotify as $userId)
        event(new ChatConversationsEvent('personal.'.$userId, $conv));
        return $conv;
    }

    function markAsRead() {
        $userId = auth()->user()->id;
        $convId = +$this->request->get('id');
        $conv = Conversation::with('users')->findOrFail($convId);
        MessageNotification::where('conversation_id', $convId)->where('user_id', $userId)->where('read', 0)->update(['read' => 1]);
        event(new ChatConversationsEvent('personal.'.$userId, $conv));
        return [];
    }
}
