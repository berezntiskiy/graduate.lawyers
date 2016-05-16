<?php

namespace App\Http\Controllers\Admin;

use App\Article;
use App\Book;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\View;
use Mockery\CountValidator\Exception;

class AdminBooksController extends AdminController
{
    protected $model = Book::class;
    protected $request = null;
    protected $name = 'books';

    public function __construct(Request $request)
    {
        $this->request = $request;
    }


    public function index()
    {
        return $this->createPage(View::make('admin.books.list'));
//        return View::make('admin.books.list');
//
//        $grid = \DataGrid::source(Book::whereRaw('1 = 1'));
//
//        $grid->add('id','ID', true)->style("width:100px");
//        $grid->add('name','Name');
//        $grid->add('description','Description');
//
//        $grid->edit('/rapyd-demo/edit', 'Edit','show|modify');
//        $grid->link('/rapyd-demo/edit',"New Article", "TR");
//        $grid->orderBy('id','desc');
////        $grid->paginate(10);
//
////        $grid->row(function ($row) {
////            if ($row->cell('id')->value == 20) {
////                $row->style("background-color:#CCFF66");
////            } elseif ($row->cell('id')->value > 15) {
////                $row->cell('title')->style("font-weight:bold");
////                $row->style("color:#f00");
////            }
////        });
//
//        return  view('rapyd::demo.grid', compact('grid'));
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
}
