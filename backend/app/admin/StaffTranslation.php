<?php

Admin::model(\App\StaffTranslation::class)->title('')->with()->filters(function ()
{

})->columns(function ()
{

})->form(function ()
{
	FormItem::select('staff_id', 'Staff')->list(Staff::class);
	FormItem::text('name', 'Name');
	FormItem::text('locale', 'Locale');
	FormItem::timestamp('deleted_at', 'Deleted At');//->seconds(true);
	FormItem::select('created_by', 'Created By')->list(Staff::class);
	FormItem::select('updated_by', 'Updated By')->list(Staff::class);
	FormItem::select('deleted_by', 'Deleted By')->list(Staff::class);
});