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

    function canIndex() {
        return false;
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

    function canStore() {
        return false;
    }

    function store()
    {
        if (!$this->canStore())
            throw new LogicException('DENIED');
        $model = $this->model;
        return $model::create(Input::all());
    }

    function canShow() {
        return false;
    }

    function show($id)
    {
        if (!$this->canShow())
            throw new LogicException('DENIED');
        $model = $this->model;
        $entity = $model::find($id);
        if (!$entity)
            throw new LogicException('WRONG_ID');
        return $entity;
    }

    function canUpdate() {
        return false;
    }

    function update()
    {
        if (!$this->canUpdate())
            throw new LogicException('DENIED');
        $model = $this->model;
        return $model::save(Input::all());
    }

    function canDestroy() {
        return false;
    }

    function destroy($id)
    {
        if (!$this->canDestroy())
            throw new LogicException('DENIED');
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

    function getLike($id)
    {
        return $this->like($id);
    }

    function postLike()
    {
        $id = $this->request->get('id');
        return $this->like($id);
    }

    function getUnlike($id)
    {
        return $this->unlike($id);
    }

    function postUnlike()
    {
        $id = $this->request->get('id');
        return $this->unlike($id);
    }
}
