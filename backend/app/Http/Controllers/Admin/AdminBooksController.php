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
    protected $route = 'admin.books';

    public function __construct(Request $request)
    {
        $this->request = $request;
    }


    public function index()
    {
        $grid = DataGrid::source(Book::whereRaw('1 = 1'));

        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('description', 'Description');

//        $grid->edit(route($this->route . '.index'), 'Edit', 'modify|delete');
//        $grid->edit("{!! route($this->route . '.index') !!}", 'Edit', 'modify|delete');
//        $grid->link('/asd', "New Entity", "TR");
//        http://192.168.50.10/admin/books?modify=16
        $placeholder = '000-000-000';
        $re = route('admin.books.edit', ['books' => $placeholder]);
        $rd = route('admin.books.delete', ['books' => $placeholder]);
        $re = str_replace($placeholder, '{{$id}}', $re);
        $rd = str_replace($placeholder, '{{$id}}', $rd);
//        dd($re, $rd);
        $grid->add('
            <a href="' . $re . '"><span class="glyphicon glyphicon-edit"> </span></a>
            
            @if(!$deleted_at)
                <a class="text-danger" href="' . $re . '"><span class="glyphicon glyphicon-trash"> </span></a>
            @endif
            ', 'Actions');
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

        return $this->createPage(view('admin.layout.crud.list', ['grid' => '' . $grid, 'route' => $this->route]));
    }

//    function mutation() {
//        $modify = $this->request->get('modify');
//        if ($modify)
//            return $this->edit($modify);
//
//        $delete = $this->request->get('delete');
//        if ($delete)
//            return $this->delete($delete);
//    }

    function edit($id)
    {
        $Model = $this->model;
        $model = $Model::findOrFail($id);
        return $this->createPage(view('admin.layout.crud.update', ['book' => $model->translationTree(['ru', 'en', 'md'])]));
    }

    function delete($id)
    {

    }


    function store(Requests\BookRequest $request)
    {
        $model = $this->model;
        $model::create($request->all());
        return redirect()->route('admin.books.index');
    }

    function show($id)
    {
        $model = $this->model;
        $entity = $model::find($id);
        if (!$entity)
            throw new Exception('WRONG_ID');
        return $entity;
    }

    function update($id, Requests\BookRequest $request)
    {
        $Model = $this->model;
        $model = $Model::findOrFail($id);
        $model->fill($request->all());
        $model->save();
        return redirect()->route('admin.books.index');
    }

    function destroy($id)
    {
        $model = $this->model;
        return $model::destroy($id);
    }

    function create()
    {
//        $form = \DataForm::source(new Book);
//
//
//        $form->add('title','Title', 'text')->rule('required|min:5');
//        $form->add('title2','Title', 'text')->rule('required|min:5');
//        $form->add('title3','Title', 'text')->rule('required|min:5');
//        $form->add('title4','Title', 'text')->rule('required|min:5');
//        $form->add('body','Body', 'redactor');
//
//        //some enhanced field (images, wysiwyg, autocomplete, maps, etc..):
////        $form->add('photo','Photo', 'image')->move('uploads/images/')->preview(80,80);
////        $form->add('body','Body', 'redactor'); //wysiwyg editor
////        $form->add('author.name','Author','autocomplete')->search(['firstname','lastname']);
////        $form->add('categories.name','Categories','tags'); //tags field
////        $form->add('map','Position','map')->latlon('latitude','longitude'); //google map
//
//        $form->submit('Save');
//
//        $form->saved(function () use ($form) {
//            $form->message("ok record saved");
//            $form->link("/rapyd-demo/form","back to the form");
//        });
        return $this->createPage(view('admin.layout.crud.create', ['form' => '']));
    }

}
