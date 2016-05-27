<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Section extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;

    protected $table = 'sections';

    protected $fillable = ['name', 'book_id', 'description'];
    public $translatedAttributes = ['name', 'description'];

    function book() {
        return $this->belongsTo(Book::class);
    }
}
