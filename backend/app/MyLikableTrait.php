<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

trait MyLikableTrait
{
    use \Conner\Likeable\LikeableTrait;

    function getLikesAttribute() {
        return $this->liked();
    }
}
