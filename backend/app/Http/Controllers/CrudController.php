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

    function create() {

    }

    function store() {

    }

    function show() {

    }

    function update() {

    }

    function destroy() {

    }
}
