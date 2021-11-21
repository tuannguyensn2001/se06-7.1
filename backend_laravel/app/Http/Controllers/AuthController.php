<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AuthController extends Controller
{
    private $service;

    public function __construct(AuthService $service)
    {
        $this->service = $service;
    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->only('email', 'name', 'password');

        try {
            $user = $this->service->handleRegister($data);

            return $this->response([
                'message' => trans('auth.register_success'),
                'data' => $user
            ]);

        } catch (\Exception $exception) {

            return $this->response([
                'message' => trans('auth.register_error'),
                'data' => [],
                'log' => $exception->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);

        }

    }

    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->only('email', 'password');

        try {
            $result = $this->service->handleLogin($data);

            return $this->response([
                'message' => trans('auth.login_success'),
                'data' => $result
            ]);
        } catch (UnauthorizedException $exception) {

            return $this->response([
                'message' => trans('auth.login_unauthorized'),
                'data' => [],
                'log' => $exception->getMessage()
            ], ResponseAlias::HTTP_UNAUTHORIZED);

        } catch (\Exception $exception) {

            return $this->response([
                'message' => trans('auth.login_error'),
                'data' => [],
                'log' => $exception->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);

        }

    }

    public function logout(): \Illuminate\Http\JsonResponse
    {
        try {
            $this->service->handleLogout();

            return $this->response([
                'message' => trans('auth.logout_success'),
                'data' => []
            ]);
        } catch (\Exception $exception) {
            return $this->response([
                'message' => trans('auth.logout_error'),
                'data' => [],
                'log' => $exception->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function me(): \Illuminate\Http\JsonResponse
    {
        try {
            $user = $this->service->handleGetAuth();
            return $this->response([
                'message' => trans('auth.get_me_success'),
                'data' => $user
            ]);
        } catch (\Exception $exception) {
            return $this->responseInternalServerError([
                'message' => trans('auth.get_me_error'),
                'log' => $exception->getMessage()
            ]);
        }
    }
}
