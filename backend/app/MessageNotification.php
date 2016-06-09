<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class MessageNotification extends Model {

    protected $table = 'messages_notifications';
    protected $fillable = array('user_id', 'created_at', 'updated_at', 'message_id', 'conversation_id', 'read');

}
