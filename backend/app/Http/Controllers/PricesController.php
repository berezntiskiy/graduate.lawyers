<?php

namespace App\Http\Controllers;

use App\Price;
use App\Http\Requests;

class PricesController extends CrudController
{
    protected $model = Price::class;

    function canIndex() {
        return true;
    }

    function canShow()
    {
        return true;
    }
}
