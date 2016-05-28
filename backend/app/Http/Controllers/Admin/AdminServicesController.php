<?php

namespace App\Http\Controllers\Admin;

use App\Book;

use App\Http\Requests;
use App\Service;

class AdminServicesController extends AdminCrudController
{
    protected $model = Service::class;
    protected $name = 'services';
    protected $route = 'admin.services';

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('title', 'Title');
        $grid->add('naturalperson', 'naturalperson');
        $grid->add('text', 'Text');
    }


    function store(Requests\ServiceRequest $request)
    {
        return $this->_store($request);
    }

    function update($id, Requests\ServiceRequest $request)
    {
        return $this->_update($id, $request);
    }

}
