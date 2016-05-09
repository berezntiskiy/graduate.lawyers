<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class ArticleTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'article_translations';

    public $timestamps = false;
    protected $fillable = ['title', 'text'];
}
