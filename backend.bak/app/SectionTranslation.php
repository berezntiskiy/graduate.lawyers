<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class SectionTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'section_translations';

    public $timestamps = false;
    protected $fillable = ['name', 'description'];
}
