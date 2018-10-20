<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // I've provided you two ways to seed our Team Management App database

        // First way: using seeders (random number of players for each team)
        // $this->call(UsersTableSeeder::class);
        $this->call(TeamsTableSeeder::class);
        $this->call(PlayersTableSeeder::class);

        // Second way: using factories directly (equal number of players for each team)
        /*factory(App\Team::class, 3)->create()->each(function ($team) {
            factory(App\Player::class, 11)->create(['team_id'=>$team->id]);
        });*/

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
