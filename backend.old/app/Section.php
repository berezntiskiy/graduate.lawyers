<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Section extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'sections';

    public $translatedAttributes = ['name', 'description'];

//    function book() {
//        return $this->hasOne(Book::class);
//    }
}
