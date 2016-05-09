<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class BookTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'book_translations';

    public $timestamps = false;

    public $fillable = array('name','description');
}
