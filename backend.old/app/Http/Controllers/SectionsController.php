<?php

namespace App\Http\Controllers;

use App\Section;
use App\Http\Requests;

class SectionsController extends CrudController
{
    protected $model = Section::class;
}
