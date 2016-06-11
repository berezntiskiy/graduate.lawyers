<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Section extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;
    use \Conner\Likeable\LikeableTrait;

    protected $table = 'sections';

    protected $fillable = ['name', 'book_id', 'description'];
    public $translatedAttributes = ['name', 'description'];

    function book() {
        return $this->belongsTo(Book::class);
    }
}
