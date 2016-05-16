<?php

namespace App\Http\Controllers\Admin;

use App\Article;
use App\Book;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\View;
use Mockery\CountValidator\Exception;
use Zofe\Rapyd\DataGrid\DataGrid;

class AdminBooksController extends AdminCrudController
{
    protected $model = Book::class;
    protected $request = null;
    protected $name = 'books';
    protected $entitiesPerPage = 10;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }


    function getCreateLink() {
        return route('admin.books.create');
    }

    public function index()
    {
        $grid = DataGrid::source(Book::whereRaw('1 = 1'));

        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('description', 'Description');

        $grid->edit('/rapyd-demo/edit', 'Edit', 'show|modify');
        $grid->link($this->getCreateLink(), "New Entity", "TR");
        $grid->orderBy('id', 'desc');
        $grid->paginate($this->entitiesPerPage);

//        $grid->row(function ($row) {
//            if ($row->cell('id')->value == 20) {
//                $row->style("background-color:#CCFF66");
//            } elseif ($row->cell('id')->value > 15) {
//                $row->cell('title')->style("font-weight:bold");
//                $row->style("color:#f00");
//            }
//        });

        return $this->createPage(view('admin.layout.crud.list', ['grid' => ''.$grid]));
    }


    function store()
    {
        $model = $this->model;
        return $model::create(Input::all());
    }

    function show($id)
    {
        $model = $this->model;
        $entity = $model::find($id);
        if (!$entity)
            throw new Exception('WRONG_ID');
        return $entity;
    }

    function update()
    {
        $model = $this->model;
        return $model::save(Input::all());
    }

    function destroy($id)
    {
        $model = $this->model;
        return $model::destroy($id);
    }
    
    function create() {
        return $this->createPage(view('admin.layout.crud.create', []));
    }
}
