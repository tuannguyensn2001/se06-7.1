<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('media')->insert([
//            [
//                'name' => 'coffeemat.glb',
//                'path' => '/model/coffeemat.glb',
//                'created_at' => Carbon::now()
//            ]
//        ]);
//        $data = [
//            'coffeemat.glb',
//            'Horse.glb',
//            'House_001_GLB.glb',
//            'NeilArmstrong.glb',
//            'RobotExpressive.glb',
//            'shishkebab.glb'
//        ];
//
//        foreach ($data as $key => $item) {
//            DB::table('media')->insert([
//                'name' => $item,
//                'path' => "model/{$item}",
//                'created_at' => Carbon::now(),
//                'updated_at' => Carbon::now()
//            ]);
//
//            DB::table('models')->insert([
//                'name' => $item,
//                'media_id' => $key + 1,
//                'created_at' => Carbon::now(),
//                'updated_at' => Carbon::now()
//            ]);
//        }
    }
}
