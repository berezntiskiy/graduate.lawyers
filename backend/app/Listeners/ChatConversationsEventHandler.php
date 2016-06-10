<?php

namespace App\Listeners;

use App\Events\ChatConversationsEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Redis;

class ChatConversationsEventHandler
{
    CONST CHANNEL = 'chat.conversations';

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ChatConversationsEvent  $event
     * @return void
     */
    public function handle(ChatConversationsEvent $event)
    {
        $redis = Redis::connection();
        $redis->publish(self::CHANNEL, $event->data);
    }
}
