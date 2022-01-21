<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class ModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => random_int(1, 100),
            'model' => 'http://se.test/Horse.glb',
            'name' => $this->faker->text,
            'is_publish' => Arr::random([0, 1])
        ];
    }
}
