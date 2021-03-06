<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'staff';
    protected $hidden = ['password', 'email', 'remember_token'];

    protected $fillable = ['name', 'email', 'password'];
    public $translatedAttributes = ['name'];
}

