<?php

namespace App\Listeners;

use App\Events\ChatMessagesEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Redis;

class ChatMessagesEventHandler
{
    CONST CHANNEL   = 'chat.messages';

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
     * @param  ChatMessagesEvent  $event
     * @return void
     */
    public function handle(ChatMessagesEvent $event)
    {
        $redis = Redis::connection();
        $redis->publish(self::CHANNEL, $event->data);
    }
}
