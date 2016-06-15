<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Mail;

class AdminDashboardController extends AdminController
{
    protected $layout = 'admin.layout.master';
    protected $name = null;

    function index() {
        return $this->createPage(view('admin.page.dashboard'));
    }
}
