<?php

namespace App\Http\Controllers\Admin;

use App\Book;
use Illuminate\Http\Request;

use App\Http\Requests;

class AdminBooksController extends AdminCrudController
{
    protected $model = Book::class;
    protected $request = null;
    protected $name = 'books';
    protected $entitiesPerPage = 10;
    protected $route = 'admin.books';

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function getModelForIndex()
    {
        $model = Book::whereRaw('1 = 1');
        if ($this->request->query->get('withDeleted'))
            $model->withTrashed();
        return $model;
    }

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('description', 'Description');
    }

    function edit($id)
    {
        return $this->_edit($id);
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
