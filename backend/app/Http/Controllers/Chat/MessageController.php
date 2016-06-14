<?php
namespace App\Http\Controllers\Chat;

use App\Conversation;
use App\Events\ChatConversationsEvent;
use App\Events\ChatMessagesEvent;
use App\Events\ChatMessagesEventHandler;
use App\Http\Controllers\RestController;
use App\Message;
use App\MessageNotification;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class MessageController extends RestController
{

    /**
     * Display a listing of messages.
     *
     * @return Response
     */
    public function show()
    {
        $id = $this->request->get('conversation_id');
        // todo !! make check if user exist in this conversation
//        Message::where('conversation_id', $conversation->id);
        return Message::where('conversation_id', $id)->with('user')->with('messages_notifications')->orderBy('created_at')->get();
//        $messages       = Message::where('conversation_id', $conversation->id)->orderBy('created_at')->get();
//
//        return View::make('templates/messages')->with('messages', $messages)->render();
    }

    /**
     * Store a newly created message in storage.
     *
     * @return Response
     */
    public function store()
    {

//        $rules     = array('body' => 'required');
//        $validator = Validator::make(Input::all(), $rules);
//
//        if($validator->fails()) {
//            return Response::json([
//                'success' => false,
//                'result' => $validator->messages()
//            ]);
//        }

        $userId = Auth::user()->id;

        $conversation = Conversation::findOrFail(Input::get('conversation_id'));
        $params = array(
            'conversation_id' => $conversation->id,
            'body' => Input::get('body'),
            'user_id' => $userId,
            'created_at' => new \DateTime
        );

        $message = Message::create($params);

        // Create Message Notifications
        $messages_notifications = array();

        foreach ($conversation->users()->get() as $user) {
            array_push($messages_notifications, new MessageNotification(array('user_id' => $user->id, 'conversation_id' => $conversation->id, 'read' => false)));
        }

        $message->messages_notifications()->saveMany($messages_notifications);

        $outMessage = Message::with('user')->with('messages_notifications')->findOrFail($message->id);
        event(new ChatMessagesEvent($conversation->id, $outMessage));

        $conv = Conversation::with('users')->findOrFail($conversation->id);
        $toNotify = [];
        $toNotify[] = $conv['author_id'];
        foreach ($conv['users'] as $user)
            $toNotify[] = $user['id'];
        foreach($toNotify as $userId)
        {
            $unread = MessageNotification::where('conversation_id', $conv->id)->where('user_id', $userId)->where('read', 0)->count();
            event(new ChatConversationsEvent('personal.'.$userId, ['new_messages' => $unread] + $conv->toArray()));
        }
        return $outMessage;
    }
}
