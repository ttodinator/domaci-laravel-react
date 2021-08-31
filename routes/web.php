<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('category',function(){
//     return 'hahahahahha';
// });

// Route::get('categories','App\Http\Controllers\Api\CategoryController@index');
// Route::post('categories/store','App\Http\Controllers\Api\CategoryController@store');
// Route::delete('categories/delete/{id}','App\Http\Controllers\Api\CategoryController@destroy');

Route::get('pisci','App\Http\Controllers\Api\PisacController@index');
Route::get('pisci/{id}','App\Http\Controllers\Api\PisacController@show');
Route::post('pisci/sacuvaj','App\Http\Controllers\Api\PisacController@store');

Route::get('citati','App\Http\Controllers\Api\CitatsController@index');
Route::post('citati/sacuvaj','App\Http\Controllers\Api\CitatsController@store');
Route::delete('citati/izbrisi/{id}','App\Http\Controllers\Api\CitatsController@destroy');

Route::get('blabla','App\Http\Controllers\PhotoController@index');
