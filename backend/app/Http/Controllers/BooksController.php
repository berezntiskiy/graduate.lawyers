<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

use App\Http\Requests;

class BooksController extends Controller
{
    function index() {
        return Book::all();
        return Book::orderBy('name')->get();
    }
}
