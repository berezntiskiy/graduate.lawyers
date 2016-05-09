<?php

namespace App\Http\Controllers;

use App\Price;
use App\Http\Requests;

class PricesController extends CrudController
{
    protected $model = Price::class;
}
