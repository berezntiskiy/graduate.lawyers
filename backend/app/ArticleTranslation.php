<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class ArticleTranslation extends Entity
{
    use SoftDeletes;
    use \Dimsav\Translatable\Translatable;
    protected $table = 'article_translations';

    public $timestamps = false;
    protected $fillable = ['title', 'text'];
}
