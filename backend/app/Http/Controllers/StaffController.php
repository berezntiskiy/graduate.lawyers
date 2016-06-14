<?php

namespace App\Http\Controllers;

use App\Staff;
use App\Http\Requests;
use App\User;

class StaffController extends CrudController
{

    function index() {
        return User::where('isStaff', true)->get();
    }
}
