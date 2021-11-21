<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;
use Illuminate\Validation\UnauthorizedException;

class AuthService
{
    private $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handleRegister($data)
    {
        $data['password'] = Hash::make($data['password']);
        return $this->repository->create($data);
    }

    public function handleLogin($data): array
    {
        $token = auth()->attempt($data);

        if (!$token) {
            throw new UnauthorizedException('Unauthorized');
        }

        return [
            'access_token' => $token,
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => $this->repository->getAuthUser()
        ];

    }

    public function handleLogout()
    {
        auth()->logout();
    }

    public function handleGetAuth(): ?\Illuminate\Contracts\Auth\Authenticatable
    {
        return $this->repository->getAuthUser();
    }
}
