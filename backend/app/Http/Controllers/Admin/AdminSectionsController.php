<?php

namespace App\Http\Controllers\Admin;

use App\Book;
use App\Section;

use App\Http\Requests;

class AdminSectionsController extends AdminCrudController
{
    protected $model = Section::class;
    protected $name = 'sections';
    protected $route = 'admin.sections';

    public function pathIndexModel($model)
    {
        return $model->with('book');
    }

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('book.name', 'Book');
        $grid->add('description', 'Description');
    }

    function getDataForForm()
    {
        $books = Book::all();
        $books_options = [];
        foreach ($books as $book) {
            $books_options[$book['id']] = $book['name'];
        }
        return ['books' => $books_options];
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
