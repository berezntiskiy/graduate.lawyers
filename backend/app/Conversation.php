<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Conversation extends Model {

    protected $table    = 'conversations';
    protected $fillable = array('author_id', 'name', 'created_at');
    protected $appends = ['new_messages'];
    public $timestamps = false;

    public function users() {
        return $this->belongsToMany(User::class, 'conversations_users', 'conversation_id', 'user_id')->where('user_id'  , '<>', Auth::user()->id);
    }

    public function messages() {
        return $this->hasMany(Message::class, 'conversation_id', 'id');
    }

    public function messagesNotifications() {
        return $this->hasMany(MessageNotification::class, 'conversation_id', 'id')->where('read', 0)->where('user_id', Auth::user()->id);
    }

    public function getNewMessagesAttribute() {
        return MessageNotification::where('conversation_id', $this->id)->where('user_id', auth()->user()->id)->where('read', 0)->count();
    }
}
