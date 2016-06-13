<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;
    use MyLikableTrait;
    protected $appends = ['likes'];

    protected $table = 'articles';

    protected $fillable = ['title', 'text', 'chapter_id'];
    public $translatedAttributes = ['title', 'text'];

    function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
}
