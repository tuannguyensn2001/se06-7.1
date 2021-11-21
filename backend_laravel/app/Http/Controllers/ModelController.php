<?php

namespace App\Http\Controllers;

use App\Models\Model;
use Illuminate\Http\Request;

class ModelController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => Model::all()
        ]);
    }
}
