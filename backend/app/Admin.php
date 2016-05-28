<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model as Eloquent;

class Admin extends Entity
{
    use SoftDeletes;

    public $table = 'administrators';

    protected $fillable = ['name', 'email', 'password'];
}
