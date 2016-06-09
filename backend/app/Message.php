<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model {

    protected $table = 'messages';
    protected $fillable = array('body', 'created_at', 'user_id', 'conversation_id');

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function conversation()
    {
        return $this->belongsTo(Conversation::class, 'conversation_id');
    }

    public function messages_notifications() {
        return $this->hasMany(MessageNotification::class, 'message_id', 'id');
    }
}
