<?php

namespace App\Providers;

use App\Events\ChatConversationsEvent;
use App\Events\ChatMessagesEvent;
use App\Listeners\ChatConversationsEventHandler;
use App\Listeners\ChatMessagesEventHandler;
use App\Listeners\CometEventHandler;
use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        ChatConversationsEvent::class => [CometEventHandler::class],
        ChatMessagesEvent::class => [CometEventHandler::class],
    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher  $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        //
    }
}
