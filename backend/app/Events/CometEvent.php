<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CometEvent extends Event
{
    use SerializesModels;
    private $room;
    private $data;
    protected $channel = null;

    public function __construct($room, $data)
    {
        $this->setRoom($room);
        $this->setData($data);
    }

    public function broadcastOn()
    {
        return [];
    }

    public function getChanel()
    {
        return $this->channel;
    }

    public function getData()
    {
        return $this->data;
    }

    public function setData($data)
    {
        $this->data = $data;
    }

    public function getRoom()
    {
        return $this->room;
    }

    public function setRoom($room)
    {
        $this->room = $room;
    }

    public function getComposedData()
    {
        return json_encode([
            'room' => $this->getRoom(),
            'data' => $this->getData()
        ]);
    }
}
