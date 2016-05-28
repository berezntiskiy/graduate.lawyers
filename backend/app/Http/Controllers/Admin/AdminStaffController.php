<?php

namespace App\Http\Controllers\Admin;

use App\Book;

use App\Http\Requests;
use App\Staff;

class AdminStaffController extends AdminCrudController
{
    protected $model = Staff::class;
    protected $name = 'staff';
    protected $route = 'admin.staff';

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('description', 'Description');
    }


    function store(Requests\BookRequest $request)
    {
        return $this->_store($request);
    }

    function update($id, Requests\BookRequest $request)
    {
        return $this->_update($id, $request);
    }

}
