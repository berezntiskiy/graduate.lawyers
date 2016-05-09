<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class ServiceTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'service_translations';

    public $timestamps = false;
    protected $fillable = ['title', 'text'];
}
