qwe
{{--public function getGrid()--}}
{{--{--}}

{{--$grid = \DataGrid::source(Article::with('author', 'categories'));--}}

{{--$grid->add('id','ID', true)->style("width:100px");--}}
{{--$grid->add('title','Title');--}}
{{--$grid->add('{!! str_limit($body,4) !!}','Body');--}}
{{--$grid->add('{{ $author->fullname }}','Author', 'author_id');--}}
{{--$grid->add('{{ implode(", ", $categories->lists("name")->all()) }}','Categories');--}}

{{--$grid->edit('/rapyd-demo/edit', 'Edit','show|modify');--}}
{{--$grid->link('/rapyd-demo/edit',"New Article", "TR");--}}
{{--$grid->orderBy('id','desc');--}}
{{--$grid->paginate(10);--}}

{{--$grid->row(function ($row) {--}}
{{--if ($row->cell('id')->value == 20) {--}}
{{--$row->style("background-color:#CCFF66");--}}
{{--} elseif ($row->cell('id')->value > 15) {--}}
{{--$row->cell('title')->style("font-weight:bold");--}}
{{--$row->style("color:#f00");--}}
{{--}--}}
{{--});--}}

{{--return  view('rapyd::demo.grid', compact('grid'));--}}
{{--}--}}