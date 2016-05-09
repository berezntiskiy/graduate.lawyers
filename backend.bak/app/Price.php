<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Price extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'prices';
    protected $hidden = [];

    protected $fillable = ['price_min', 'price_max', 'title', 'text'];
    public $translatedAttributes = ['title', 'text'];
}

