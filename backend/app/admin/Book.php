<?php

Admin::model(\App\Book::class)->title('')->with()->filters(function ()
{

})->columns(function ()
{

})->form(function ()
{
	FormItem::text('name', 'Name');//->seconds(true);
	FormItem::text('description', 'description');//->seconds(true);
	FormItem::timestamp('deleted_at', 'Deleted At');//->seconds(true);
	FormItem::timestamp('created_by', 'Created By');
	FormItem::timestamp('updated_by', 'Updated By');
	FormItem::timestamp('deleted_by', 'Deleted By');
});