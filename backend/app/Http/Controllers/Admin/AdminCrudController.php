<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests;

class AdminCrudController extends AdminController
{
    protected function createPage($content, $options = [])
    {
        return parent::createPage($content, ['content' => $content, 'menuLinks' => $this->menuLinks] + $options);
    }


//
//    public function index()
//    {
//
//        $grid = \DataGrid::source(Book::whereRaw('1 = 1'));
//
//        $grid->add('id','ID', true)->style("width:100px");
//        $grid->add('name','Name');
//        $grid->add('description','Description');
//
//        $grid->edit('/rapyd-demo/edit', 'Edit','show|modify');
//        $grid->link('/rapyd-demo/edit',"New Article", "TR");
//        $grid->orderBy('id','desc');
////        $grid->paginate(10);
//
////        $grid->row(function ($row) {
////            if ($row->cell('id')->value == 20) {
////                $row->style("background-color:#CCFF66");
////            } elseif ($row->cell('id')->value > 15) {
////                $row->cell('title')->style("font-weight:bold");
////                $row->style("color:#f00");
////            }
////        });
//
//        return  view('rapyd::demo.grid', compact('grid'));
//    }
//
//
//    function store()
//    {
//        $model = $this->model;
//        return $model::create(Input::all());
//    }
//
//    function show($id)
//    {
//        $model = $this->model;
//        $entity = $model::find($id);
//        if (!$entity)
//            throw new Exception('WRONG_ID');
//        return $entity;
//    }
//
//    function update()
//    {
//        $model = $this->model;
//        return $model::save(Input::all());
//    }
//
//    function destroy($id)
//    {
//        $model = $this->model;
//        return $model::destroy($id);
//    }
}
