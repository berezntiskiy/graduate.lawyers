<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'services';
    protected $hidden = [];

    public $translatedAttributes = ['title', 'text'];
    protected $fillable = ['naturalperson'];
}

