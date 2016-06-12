<?php

namespace App\Http\Controllers;

use App\Book;
use App\Exceptions\LogicException;
use Illuminate\Http\Request;

use App\Http\Requests;

class CrudController extends RestController
{
    protected $model = Book::class;
    protected $request = null;
    protected $likeable = false;

    function getIndexFilters()
    {
        $res = [];
        return $res;
    }

    function index()
    {
        $Model = $this->model;
        $model = $Model::whereRaw('1 = 1');

        if ($this->likeable && $this->request->get('likes')) {
            $model = $model->whereLiked(auth()->user()->id);
        }

        $filters = $this->getIndexFilters();
        foreach ($filters as $k => $v) {
            $model = $model->where($k, $v);
        }
        return $model->get();
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
            throw new LogicException('WRONG_ID');
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

    function like($id)
    {
        $Model = $this->model;
        $model = $Model::findOrFail($id);
        $model->like();
        return [];
    }

    function unlike($id)
    {
        $Model = $this->model;
        $model = $Model::findOrFail($id);
        $model->unlike();
        return [];
    }
}
