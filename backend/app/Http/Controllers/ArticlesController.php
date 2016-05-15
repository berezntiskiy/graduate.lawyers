<?php

namespace App\Http\Controllers;

use App\Article;
use App\Http\Requests;

class ArticlesController extends CrudController
{
    protected $model = Article::class;

    function getIndexFilters()
    {
        $res = parent::getIndexFilters();

        if ($this->request->get('chapter_id'))
            $res['chapter_id'] = $this->request->get('chapter_id');

        return $res;
    }
}
