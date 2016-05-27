<?php

namespace App\Http\Controllers\Admin;

use App\Section;
use App\Chapter;

use App\Http\Requests;

class AdminChaptersController extends AdminCrudController
{
    protected $model = Chapter::class;
    protected $name = 'chapters';
    protected $route = 'admin.chapters';

    public function pathIndexModel($model)
    {
        return $model->with('section');
    }

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('section.name', 'Section');
        $grid->add('description', 'Description');
    }

    function getDataForForm()
    {
        $sections = Section::all();
        $sections_options = [];
        foreach ($sections as $section) {
            $sections_options[$section['id']] = $section['name'];
        }
        return ['sections' => $sections_options];
    }


    function store(Requests\ChapterRequest $request)
    {
        return $this->_store($request);
    }

    function update($id, Requests\ChapterRequest $request)
    {
        return $this->_update($id, $request);
    }

}
