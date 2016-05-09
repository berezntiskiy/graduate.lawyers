<?php

Admin::model(\App\BookTranslation::class)->title('')->with()->filters(function ()
{

})->columns(function ()
{

})->form(function ()
{
	FormItem::select('book_id', 'Book')->list(Book::class);
	FormItem::text('name', 'Name');
	FormItem::text('description', 'Description');
	FormItem::text('locale', 'Locale');
	FormItem::timestamp('deleted_at', 'Deleted At');//->seconds(true);
	FormItem::select('created_by', 'Created By')->list(Staff::class);
	FormItem::select('updated_by', 'Updated By')->list(Staff::class);
	FormItem::select('deleted_by', 'Deleted By')->list(Staff::class);
});