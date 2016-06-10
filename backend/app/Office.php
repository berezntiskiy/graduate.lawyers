<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model as Eloquent;

class Office extends Entity
{
    use SoftDeletes;
    use Translatable;

    public $table = 'offices';

    protected $fillable = ['name', 'address', 'lan', 'lng'];
    public $translatedAttributes = ['name', 'address'];
}
