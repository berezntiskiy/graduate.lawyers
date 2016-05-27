<?php

namespace App\Http\Controllers\Admin;

use App\Article;
use App\Book;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests;
use Mockery\CountValidator\Exception;

class AdminController extends Controller
{
    protected $model = Book::class;
    protected $request = null;
    protected $layout = 'admin.layout.master';

    protected $name = null;
    protected $menuLinks = [
        'books' => 'admin.books',
        'sections' => 'admin.sections'
    ];

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function createPage($content, $options = [])
    {
        return view($this->layout, $options + ['content' => $content, 'menuLinks' => $this->menuLinks, 'name' => $this->name]);
    }


//
//    public function index()
//    {
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
//    }
//
//
//    function store()
//    {
//        $model = $this->model;
//        return $model::create(Input::all());
//    }
//
//    function show($id)
//    {
//        $model = $this->model;
//        $entity = $model::find($id);
//        if (!$entity)
//            throw new Exception('WRONG_ID');
//        return $entity;
//    }
//
//    function update()
//    {
//        $model = $this->model;
//        return $model::save(Input::all());
//    }
//
//    function destroy($id)
//    {
//        $model = $this->model;
//        return $model::destroy($id);
//    }
}
