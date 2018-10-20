<?php

use App\Player;
use Illuminate\Database\Seeder;

class PlayersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Player::truncate();
        factory(Player::class, 55)->create();
    }
}
