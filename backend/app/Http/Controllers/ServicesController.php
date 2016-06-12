<?php

namespace App\Http\Controllers;

use App\Service;
use App\Http\Requests;

class ServicesController extends CrudController
{
    protected $model = Service::class;

    function canIndex() {
        return true;
    }

    function canShow()
    {
        return true;
    }
}
