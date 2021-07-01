<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PisacSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pisacs')->insert([
            'ime'=>'Dositej',
            'prezime'=>'Obradovic',
            'godina_rodjenja'=>1739,
            'istorijskoRazdoblje'=>'prosvetiteljstvo'

        ]);
    }
}
