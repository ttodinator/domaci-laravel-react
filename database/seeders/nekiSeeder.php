<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class nekiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pisacs')->insert([
            'ime'=>'petar',
            'prezime'=>'todic',
            'godina_rodjenja'=>1739,
            'istorijskoRazdoblje'=>'prosvetiteljstvo'

        ]);
    }
}
