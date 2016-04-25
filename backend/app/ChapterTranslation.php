<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class ChapterTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'chapter_translations';

    public $timestamps = false;
    protected $fillable = ['name', 'description'];
}
