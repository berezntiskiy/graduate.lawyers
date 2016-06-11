<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model as Eloquent;

class Book extends Entity
{
    use SoftDeletes;
    use Translatable;
    use \Conner\Likeable\LikeableTrait;

    public $table = 'books';

    protected $fillable = ['name', 'description'];
    public $translatedAttributes = ['name', 'description'];
}
