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

    public function getModelForIndex() {
        $model = Book::whereRaw('1 = 1');
        if ($this->request->query->get('withDeleted'))
            $model->withTrashed();
        return $model;
    }

    public function index()
    {
        $grid = DataGrid::source($this->getModelForIndex());

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
                <a class="text-danger" href="' . $re . '" onclick="processDelete(event, {{$id}})"><span class="glyphicon glyphicon-trash"> </span></a>
            @else
                <a class="text-success" href="' . $re . '" onclick="processRestore(event, {{$id}})"><span class="glyphicon glyphicon-leaf"> </span></a>
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

        return $this->createPage(view('admin.layout.crud.list', ['grid' => '' . $grid, 'route' => $this->route, 'query' => $_GET]));
    }

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
        $Model = $this->model;
        if ($this->request->get('action') == 'restore') {
            $model = $Model::withTrashed()->findOrFail($id);
            $model->restore();
            return [];
        } else {
            $Model::destroy($id);
            return [];
        }
    }

    function create()
    {
        return $this->createPage(view('admin.layout.crud.create', ['form' => '']));
    }

}
