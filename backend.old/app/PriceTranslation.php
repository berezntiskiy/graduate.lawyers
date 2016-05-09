<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class PriceTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'price_translations';

    public $timestamps = false;
    protected $fillable = ['title', 'text'];
}
