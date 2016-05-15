<?php

namespace App\Http\Controllers;

use App\Chapter;
use App\Http\Requests;

class ChaptersController extends CrudController
{
    protected $model = Chapter::class;
    
    function getIndexFilters()
    {
        $res = parent::getIndexFilters();

        if ($this->request->get('section_id'))
            $res['section_id'] = $this->request->get('section_id');

        return $res;
    }
}
