<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ChatConversationsEvent extends Event
{
    use SerializesModels;
    public $data = null;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data = null)
    {
        $this->data = $data;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
