<?php

namespace App\Http\Controllers\Admin;

use App\Article;
use App\Section;
use App\Chapter;

use App\Http\Requests;

class AdminArticlesController extends AdminCrudController
{
    protected $model = Article::class;
    protected $name = 'articles';
    protected $route = 'admin.articles';

    public function pathIndexModel($model)
    {
        return $model->with('chapter');
    }

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('title', 'Title');
        $grid->add('chapter.name', 'Chapter');
//        $grid->add('text', 'Text');
    }

    function getDataForForm()
    {
        $chapters = Chapter::with('section.book')->get();
        $chapters_options = [];

        foreach ($chapters->toArray() as $chapter) {
            $key = $chapter['section']['book']['name'] . ' - ' . $chapter['section']['name'];
            if (!isset($chapters_options[$key]))
                $chapters_options[$key] = [];
            $chapters_options[$key][$chapter['id']] = $chapter['name'];
        }
        return ['chapters' => $chapters_options];
    }


    function store(Requests\ArticleRequest $request)
    {
        return $this->_store($request);
    }

    function update($id, Requests\ArticleRequest $request)
    {
        return $this->_update($id, $request);
    }

}
