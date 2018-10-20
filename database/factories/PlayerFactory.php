<?php

use App\Player;
use App\Team;
use Faker\Generator as Faker;

$factory->define(Player::class, function (Faker $faker) {
    $teams = Team::all()->pluck('id')->toArray();

    return [
        'team_id' => $faker->randomElement($teams),
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
    ];
});
