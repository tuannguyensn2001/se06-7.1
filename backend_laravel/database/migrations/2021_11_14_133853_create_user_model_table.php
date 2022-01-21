<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserModelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('models', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('model');
            $table->string('name');
            $table->longText('preview')->nullable();
            $table->json('base_color')->nullable();
            $table->integer('disable_zoom')->nullable();
            $table->integer('camera_controls')->nullable();
            $table->integer('auto_rotate')->nullable();
            $table->string('poster')->nullable();
            $table->string('skybox')->nullable();
            $table->json('auto_rotate_delay')->nullable();
            $table->json('camera_orbit')->nullable();
            $table->json('camera_target')->nullable();
            $table->json('rotation_per_second')->nullable();
            $table->string('interaction_policy')->nullable();
            $table->json('field_of_view')->nullable();
            $table->json('max_camera_obrit')->nullable();
            $table->json('min_camera_orbit')->nullable();
            $table->json('max_field_of_view')->nullable();
            $table->json('min_field_of_view')->nullable();
            $table->json('interpolation_decay')->nullable();
            $table->json('orientation')->nullable();
            $table->json('scale')->nullable();
            $table->json('metal_ness')->nullable();
            $table->json('rough_ness')->nullable();
            $table->json('exposure')->nullable();
            $table->json('shadow_intensity')->nullable();
            $table->string('env_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_model');
    }
}
