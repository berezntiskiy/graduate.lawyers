<?php

Admin::model(\App\PriceTranslation::class)->title('')->with()->filters(function ()
{

})->columns(function ()
{

})->form(function ()
{
	FormItem::select('price_id', 'Price')->list(Price::class);
	FormItem::text('title', 'Title');
	FormItem::text('locale', 'Locale');
	FormItem::timestamp('deleted_at', 'Deleted At');//->seconds(true);
	FormItem::select('created_by', 'Created By')->list(Staff::class);
	FormItem::select('updated_by', 'Updated By')->list(Staff::class);
	FormItem::select('deleted_by', 'Deleted By')->list(Staff::class);
	FormItem::ckeditor('text', 'Text');
});