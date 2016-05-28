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
        Mail::send('emails.resetpassword', [], function ($m) {
            $m->from('hello@app.com', 'Your Application');

            $m->to('test@ta.ru', 'test')->subject('Your Reminder!');
        });
        return $this->createPage(view('admin.page.dashboard'));
    }
}
