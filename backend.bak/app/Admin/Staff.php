<?php

Admin::model(\App\Staff::class)->title('Staff')->with()->filters(function ()
{

})->columns(function ()
{
	Column::string('name', 'Name');
	Column::string('email', 'Email');
	Column::string('password', 'Password');
})->form(function ()
{
	FormItem::text('name', 'Name');
	FormItem::text('email', 'Email');
	FormItem::text('password', 'Password');
//	FormItem::timestamp('deleted_at', 'Deleted At');//->seconds(true);
//	FormItem::timestamp('created_by', 'Created By');
//	FormItem::timestamp('updated_by', 'Updated By');
//	FormItem::timestamp('deleted_by', 'Deleted By');
});