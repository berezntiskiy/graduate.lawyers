<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

//sleep(2);

// Book -> Section -> Chapter -> Article
Route::resource('/api/book', 'BooksController');
Route::resource('/api/section', 'SectionsController');
Route::resource('/api/chapter', 'ChaptersController');
Route::resource('/api/article', 'ArticlesController');
Route::resource('/api/staff', 'StaffController');
Route::resource('/api/service', 'ServicesController');
Route::resource('/api/price', 'PricesController');