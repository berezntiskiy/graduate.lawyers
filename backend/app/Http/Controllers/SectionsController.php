<?php

namespace App\Http\Controllers;

use App\Section;
use App\Http\Requests;

class SectionsController extends CrudController
{
    protected $model = Section::class;
    protected $likeable = true;

    function getIndexFilters()
    {
        $res = parent::getIndexFilters();

        if ($this->request->get('book_id'))
            $res['book_id'] = $this->request->get('book_id');

        return $res;
    }


}
