<?php

namespace App\Http\Controllers;

use App\Chapter;
use App\Http\Requests;

class ChaptersController extends CrudController
{
    protected $model = Chapter::class;
}
