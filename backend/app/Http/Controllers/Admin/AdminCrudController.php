<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Config;
use Zofe\Rapyd\DataGrid\DataGrid;
use Illuminate\Http\Request;

class AdminCrudController extends AdminController
{
    protected $route = '';
    protected $name = '';
    protected $request = null;
    protected $entitiesPerPage = 10;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function createPage($content, $options = [])
    {
        return parent::createPage($content, ['content' => $content, 'menuLinks' => $this->menuLinks] + $options);
    }

    protected function getModel() {
        $Model = $this->model;
        $model = $Model::whereRaw('1 = 1');
        return $model;
    }
    
    public function getModelForIndex()
    {
        $model = $this->getModel();
        if ($this->request->query->get('withDeleted'))
            $model->withTrashed();
        return $model;
    }
    
    public function index()
    {
        $grid = DataGrid::source($this->getModelForIndex());

        $this->addIndexColumns($grid);

        $placeholder = '000-000-000';
        $re = route($this->route.'.edit', [$placeholder]);
        $rd = route($this->route.'.delete', [$placeholder]);
        $re = str_replace($placeholder, '{{$id}}', $re);
        $rd = str_replace($placeholder, '{{$id}}', $rd);
        $grid->add('
            <a href="' . $re . '"><span class="glyphicon glyphicon-edit"> </span></a>
            
            @if(!$deleted_at)
                <a class="text-danger" onclick="processDelete(event, {{$id}})"><span class="glyphicon glyphicon-trash"> </span></a>
            @else
                <a class="text-success" onclick="processRestore(event, {{$id}})"><span class="glyphicon glyphicon-leaf"> </span></a>
            @endif
            ', 'Actions');
        $grid->orderBy('id', 'desc');
        $grid->paginate($this->entitiesPerPage);

        return $this->createPage(view('admin.layout.crud.list', ['grid' => '' . $grid, 'route' => $this->route, 'query' => $_GET]));
    }
    
    protected function toIndex() {
        $route = $this->route;
        return redirect()->route("${route}.index");
    }
    
    protected function _update($id, $request) {
        $req = $request->all();
        $locales = Config::get('translatable.locales');
        foreach ($locales as $locale) {
            if (isset($req[$locale])) {
                if($req['activeLangs'][$locale] !== 'true') {
                    unset($req[$locale]);
                }
            }
        }
        $model = $this->getModel()->findOrFail($id);
        $model->fill($req);
        $model->save();
        return $this->toIndex();
    }

    function edit($id)
    {
        return $this->_edit($id);
    }
    
    protected function _edit($id) {
        $Model = $this->model;
        $model = $Model::findOrFail($id);
        return $this->createPage(view('admin.layout.crud.update', $this->getDataForForm() + ['name' => $this->name, 'isNew' => false, 'entity' => $model->translationTree(['ru', 'en', 'md'])]));
    }

    protected function _store($request) {
        $model = $this->model;
        $model::create($request->all());
        return $this->toIndex();
    }

    public function destroy($id)
    {
        if ($this->request->get('action') == 'restore') {
            $model = $this->getModel()->withTrashed()->findOrFail($id);
            $model->restore();
            return [];
        } else {
            $Model = $this->model;
            $Model::destroy($id);
            return [];
        }
    }
    
    function show($id)
    {
        $model = $this->getModel();
        return $model->findOrFail($id);
    }

    function create()
    {
        return $this->createPage(view('admin.layout.crud.update', $this->getDataForForm() + ['name' => $this->name, 'isNew' => true, 'entity' => []]));
    }

    function getDataForForm() {
        return [];
    }
}
