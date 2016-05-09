<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

use App\Http\Requests;
use Mockery\CountValidator\Exception;

class CrudController extends Controller
{
    protected $model = Book::class;

    function index() {
        $model = $this->model;
        return $model::all();
    }

    function store() {
        $model = $this->model;
        return $model::create(Input::all());
    }

    function show($id) {
        $model = $this->model;
        $entity = $model::find($id);
        if (!$entity)
            throw new Exception('WRONG_ID');
        return $entity;
    }

    function update() {
        $model = $this->model;
        return $model::save(Input::all());
    }

    function destroy($id) {
        $model = $this->model;
        return $model::destroy($id);
    }
}
