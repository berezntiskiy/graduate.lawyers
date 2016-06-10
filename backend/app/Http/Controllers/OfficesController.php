<?php

namespace App\Http\Controllers;

use App\Office;
use App\Http\Requests;

class OfficesController extends CrudController
{
    protected $model = Office::class;
}
