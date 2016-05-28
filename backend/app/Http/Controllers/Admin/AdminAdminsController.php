<?php

namespace App\Http\Controllers\Admin;

use App\Book;

use App\Http\Requests;

class AdminAdminsController extends AdminCrudController
{
    protected $model = Book::class;
    protected $name = 'books';
    protected $route = 'admin.books';
    protected $hasTranslations = false;

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('email', 'Email');
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
