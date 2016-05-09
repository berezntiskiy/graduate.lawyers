<?php

Admin::model(\App\Book::class)->title('My Model Title')->with()->filters(function ()
{

})->columns(function ()
{
	Column::string('name', 'Name');
	Column::string('description', 'Description');
//	Column::string('image', 'Image');
//	Column::string('date', 'Date');
//	Column::string('entries', 'Entries');
})->form(function ()
{
	FormItem::text('name', 'Name')->required();
	FormItem::timestamp('deleted_at', 'Deleted At');//->seconds(true);
	FormItem::timestamp('created_by', 'Created By');
	FormItem::timestamp('updated_by', 'Updated By');
	FormItem::timestamp('deleted_by', 'Deleted By');
});