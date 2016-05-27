<h3>Creation new entity</h3>

{!! BootForm::open()->action( route('admin.books.store') )->post() !!}
{!! BootForm::text('name', 'name') !!}
{!! BootForm::text('description', 'description') !!}
{!! BootForm::submit('Submit') !!}
{!! BootForm::close() !!}