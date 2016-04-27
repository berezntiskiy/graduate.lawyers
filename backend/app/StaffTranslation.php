<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class StaffTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'staff_translations';

    public $timestamps = false;
    protected $fillable = ['name', 'description'];
}
