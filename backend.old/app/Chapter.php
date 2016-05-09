<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Chapter extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'chapters';

    public $translatedAttributes = ['name', 'description'];
}