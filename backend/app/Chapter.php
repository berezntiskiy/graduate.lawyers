<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Chapter extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;
    use \Conner\Likeable\LikeableTrait;

    protected $table = 'chapters';

    protected $fillable = ['name', 'description', 'section_id'];
    public $translatedAttributes = ['name', 'description'];

    function section() {
        return $this->belongsTo(Section::class);
    }
}
