<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class OfficeTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'office_translations';

    public $timestamps = false;

    public $fillable = array('name','description');
}
