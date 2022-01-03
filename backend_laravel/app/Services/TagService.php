<?php

namespace App\Services;

use App\Repositories\TagRepository;
use Illuminate\Support\Facades\Auth;

class TagService
{

    private $tagRepository;

    public function __construct(TagRepository $repository)
    {
        $this->tagRepository = $repository;
    }

    public function handleGetOwn()
    {
        return $this->tagRepository->getByUserId(Auth::id());

    }
}
