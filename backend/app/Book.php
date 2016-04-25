<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'books';

    public $translatedAttributes = ['name', 'description'];
}
