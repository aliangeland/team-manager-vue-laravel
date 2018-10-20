<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {

    /* User register */
    Route::post('user/register', 'Api\v1\AuthController@register');

    /* User login */
    Route::post('user/login', 'Api\v1\AuthController@login');

    /* Refresh user's token */
    Route::get('user/refresh', 'Api\v1\AuthController@token');


    Route::group(['middleware' => ['jwt.auth']], function() {

        /* User logout from system */
        Route::post('user/logout', 'Api\v1\AuthController@logout');

        /* Show all teams */
        Route::get('teams', 'Api\v1\TeamController@index');

        /* Team actions */
        Route::prefix('team')->group(function () {
            /* Show team details (players) */
            Route::get('{team}', 'Api\v1\TeamController@show');
            /* Add a team */
            Route::post('/', 'Api\v1\TeamController@store');
            /* Add a player to a team */
            Route::post('{team}/player', 'Api\v1\PlayerController@store');
        });

        /* Player actions */
        Route::prefix('player')->group(function () {
            /* Delete a player */
            Route::delete('{player}', 'Api\v1\PlayerController@destroy');
            /* Update a player in a team */
            Route::patch('{player}', 'Api\v1\PlayerController@update');
        });

    });

});



