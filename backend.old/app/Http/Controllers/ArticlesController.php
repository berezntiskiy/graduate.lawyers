<?php

namespace App\Http\Controllers;

use App\Article;
use App\Http\Requests;

class ArticlesController extends CrudController
{
    protected $model = Article::class;
}
