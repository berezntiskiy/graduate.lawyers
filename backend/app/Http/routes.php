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
//header("Access-Control-Allow-Origin: http://localhost:3000");
//header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
//header('Access-Control-Allow-Credentials: true');
//header('Access-Control-Allow-Headers: X-CSRF-TOKEN, Origin, Content-Type, Accept, Authorization, X-Request-With, Content-Type, Content-Range, Content-Disposition, Content-Description');

$lang = isset($_COOKIE['lang']) ? $_COOKIE['lang'] : 'ru';
App::setLocale($lang);

Route::get('', function () {
    return view('welcome');
});

//sleep(2);

// Book -> Section -> Chapter -> Article
Route::resource('api/book', 'BooksController');
Route::resource('api/section', 'SectionsController');
Route::resource('api/chapter', 'ChaptersController');
Route::resource('api/article', 'ArticlesController');
Route::resource('api/staff', 'StaffController');
Route::resource('api/service', 'ServicesController');
Route::resource('api/price', 'PricesController');

Route::get('api/book/{id}/like', 'BooksController@getLike');
Route::get('api/book/{id}/unlike', 'BooksController@getUnlike');
Route::get('api/section/{id}/like', 'SectionsController@getLike');
Route::get('api/section/{id}/unlike', 'SectionsController@getUnlike');
Route::get('api/chapter/{id}/like', 'ChaptersController@getLike');
Route::get('api/chapter/{id}/unlike', 'ChaptersController@getUnlike');
Route::get('api/article/{id}/like', 'ArticlesController@getLike');
Route::get('api/article/{id}/unlike', 'ArticlesController@getUnlike');

Route::post('api/book/like', 'BooksController@postLike');
Route::post('api/book/unlike', 'BooksController@postUnlike');
Route::post('api/section/like', 'SectionsController@postLike');
Route::post('api/section/unlike', 'SectionsController@postUnlike');
Route::post('api/chapter/like', 'ChaptersController@postLike');
Route::post('api/chapter/unlike', 'ChaptersController@postUnlike');
Route::post('api/article/like', 'ArticlesController@postLike');
Route::post('api/article/unlike', 'ArticlesController@postUnlike');

Route::resource('api/address', 'OfficesController');


function createAdminCrudRoutes($entity, $controller) {
    Route::resource("/admin/$entity", "Admin\\$controller");

//    Route::get("/admin/$entity", [ 'as' => "admin.$entity.index", 'uses' => "Admin\\$controller@index"]);
//    Route::get("/admin/$entity/mutation", [ 'as' => "admin.$entity.mutation", 'uses' => "Admin\\$controller@mutation"]);
    Route::get("/admin/$entity/{books}/delete", [ 'as' => "admin.$entity.delete", 'uses' => "Admin\\$controller@delete"])->middleware(['admin_check']);
}

createAdminCrudRoutes('books', 'AdminBooksController');
createAdminCrudRoutes('sections', 'AdminSectionsController');
createAdminCrudRoutes('chapters', 'AdminChaptersController');
createAdminCrudRoutes('articles', 'AdminArticlesController');
createAdminCrudRoutes('services', 'AdminServicesController');
createAdminCrudRoutes('admins', 'AdminAdminsController');
createAdminCrudRoutes('staff', 'AdminStaffController');



Route::get('admin/login', 'Admin\AdminLoginController@index');
Route::post('admin/login', 'Admin\AdminLoginController@login');
Route::any('admin/logout', 'Admin\AdminLoginController@logout');

Route::resource('admin', 'Admin\AdminDashboardController');




Route::any('api/user/isAuthenticated', 'Auth\AuthController@isAuthenticated');
Route::post('api/user/register', 'Auth\AuthController@postRegister');
Route::post('api/user/login', 'Auth\AuthController@postLogin');
Route::post('api/user/logout', 'Auth\AuthController@getLogout');
Route::get('password/reset/{token}', 'Auth\PasswordController@getReset');
//Route::post('api/password/reset', 'Auth\PasswordController@postReset');
Route::post('api/password/reset', 'Auth\PasswordController@ajaxReset');


Route::get('api/chat/conversations', 'Chat\ConversationController@index');
Route::post('api/chat/conversations/createNew', 'Chat\ConversationController@store');
Route::post('api/chat/conversations/markAsRead', 'Chat\ConversationController@markAsRead');
Route::get('api/chat/messages/', 'Chat\MessageController@show');
Route::post('api/chat/messages/', 'Chat\MessageController@store');


