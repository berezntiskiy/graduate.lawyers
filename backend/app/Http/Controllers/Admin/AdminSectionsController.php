<?php

namespace App\Http\Controllers\Admin;

use App\Section;

use App\Http\Requests;

class AdminSectionsController extends AdminCrudController
{
    protected $model = Section::class;
    protected $name = 'sections';
    protected $route = 'admin.sections';

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('description', 'Description');
    }


    function store(Requests\SectionRequest $request)
    {
        return $this->_store($request);
    }

    function update($id, Requests\SectionRequest $request)
    {
        return $this->_update($id, $request);
    }

}
