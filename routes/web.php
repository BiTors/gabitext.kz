<?php

Route::get('/', 'indexController@index');

//article/
Route::get('article/{id}','IndexController@show')->name('articleShow');


Auth::routes();

 Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
