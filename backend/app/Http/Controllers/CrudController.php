<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

use App\Http\Requests;

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
        return $model::find($id);
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
