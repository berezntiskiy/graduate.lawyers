<?php

namespace App\Http\Controllers;

use App\Staff;
use App\Http\Requests;

class StaffController extends CrudController
{
    protected $model = Staff::class;
}
