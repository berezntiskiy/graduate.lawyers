<?php

namespace App\Http\Controllers;

use App\Book;
use App\Http\Requests;

class BooksController extends CrudController
{
    protected $model = Book::class;
    protected $likeable = true;
}
