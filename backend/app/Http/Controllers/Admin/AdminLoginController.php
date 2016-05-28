<?php

namespace App\Http\Controllers\Admin;


use App\Admin;
use App\Http\Requests;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AdminLoginController extends AdminController
{
    protected $isSecured = false;
    
    function login() {
        $admin = Admin::where('email', '=', $this->request->get('email'))->first();
        $isValid = Hash::check($this->request->get('password'), $admin->password);
        if (!$isValid) {
            return redirect('admin/login/')
                ->withErrors(['wrong'])
                ->withInput();
        }
        else {
            Session::set('admin_id', $admin->id);
            Session::set('admin_name', $admin->name);
            return redirect('admin/');
        }
    }

    function logout() {
        Session::flush();
        return redirect('admin/login/');
    }
    
    function index() {
        if (Session::get('admin_id'))
            return redirect('admin/');
        return view('admin.layout.auth');
    }
}
