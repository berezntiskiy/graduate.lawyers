<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Entity extends Model
{
    function translationTree($translations)
    {
        $model = $this->toArray();
        foreach($this->translatedAttributes as $translatedAttribute)
            unset($model[$translatedAttribute]);

        foreach ($translations as $translation) {
            $translated = $this->translate($translation);
            if ($translated)
                $model[$translation] = $translated->toArray();
        }
        return $model;
    }
}
