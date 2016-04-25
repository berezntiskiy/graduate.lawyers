<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'staff';

    public $translatedAttributes = ['name'];
}

