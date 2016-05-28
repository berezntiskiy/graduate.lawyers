<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;

class AdminDashboardController extends AdminController
{
    protected $layout = 'admin.layout.master';
    protected $name = null;

    function index() {
//        $this->
        return $this->createPage(view('admin.page.dashboard'));
    }
}
