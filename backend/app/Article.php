<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;
    use \Conner\Likeable\LikeableTrait;

    protected $table = 'articles';

    protected $fillable = ['title', 'text', 'chapter_id'];
    public $translatedAttributes = ['title', 'text'];

    function chapter() {
        return $this->belongsTo(Chapter::class);
    }
}
