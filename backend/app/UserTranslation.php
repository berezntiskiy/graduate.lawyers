<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class UserTranslation extends Entity
{
    use SoftDeletes;
    protected $table = 'user_translations';

    public $timestamps = false;

    public $fillable = ['name','about'];
}
