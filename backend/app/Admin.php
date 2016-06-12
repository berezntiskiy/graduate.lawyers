<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Support\Facades\Session;

class Admin extends Entity
{
    use SoftDeletes;

    public $table = 'administrators';

    protected $fillable = ['name', 'email', 'password'];


    static function currentId() {
        return Session::get('admin_id');
    }
}
