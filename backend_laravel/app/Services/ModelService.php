<?php

namespace App\Services;

class ModelService
{
    public function handleGetModels()
    {
        return auth()->user()->models;
    }
}
