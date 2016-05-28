<?php

namespace App\Http\Controllers\Admin;

use App\Admin;
use App\Book;

use App\Http\Requests;
use Illuminate\Support\Facades\Hash;

class AdminAdminsController extends AdminCrudController
{
    protected $model = Admin::class;
    protected $name = 'admins';
    protected $route = 'admin.admins';
    protected $hasTranslations = false;

    public function addIndexColumns($grid)
    {
        $grid->add('id', 'ID', true)->style("width:100px");
        $grid->add('name', 'Name');
        $grid->add('email', 'Email');
    }


    function store(Requests\AdminRequest $request)
    {
        return $this->_store($request);
    }

    function getRequestData() {
        $data = parent::getRequestData();
        if (isset($data['password']))
            unset($data['password']);

        if (isset($data['new_password']) && strlen($data['new_password'])) {
            $data['password'] = Hash::make($data['new_password']);
            unset($data['new_password']);
        }
        return $data;
    }

    function update($id, Requests\AdminRequest $request)
    {
        return $this->_update($id, $request);
    }

}
