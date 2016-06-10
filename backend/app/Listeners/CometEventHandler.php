<?php

namespace App\Listeners;

use App\Events\ChatConversationsEvent;
use App\Events\CometEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Redis;

class CometEventHandler
{
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
     * @param  ChatConversationsEvent $event
     * @return void
     */
    public function handle(CometEvent $event)
    {
        $this->pushEvent($event);
    }

    protected function pushEvent(CometEvent $event)
    {
        $redis = Redis::connection();
        $redis->publish($event->getChanel(), $event->getComposedData());
    }
}
