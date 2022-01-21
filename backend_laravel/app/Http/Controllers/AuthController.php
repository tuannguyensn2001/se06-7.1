<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Services\AuthService;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
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

        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'email|unique:users,email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Thông tin đăng ký không hợp lệ',
                'errors' => $validator->errors()
            ], 422);
        }


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

    public function medias(): \Illuminate\Http\JsonResponse
    {
        $result = $this->service->handleGetMedias();

        return $this->response([
            'message' => 'Lấy thông tin file thành công',
            'data' => $result
        ]);
    }

    public function update(Request $request, UserRepository $userRepository)
    {
        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->responseBadRequest('Thông tin không hợp lệ');
        }

        auth()->user()->name = $request->get('name');

        auth()->user()->save();

        return $this->response([
            'message' => 'Cập nhật thông tin thành công',
            'data' => $userRepository->getAuthUser()
        ]);
    }

    public function changePassword(Request $request, UserRepository $userRepository): \Illuminate\Http\JsonResponse
    {
        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'password' => 'required',
            'old_password' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->responseBadRequest('Thông tin gửi lên không hợp lệ');
        }

        if (!Hash::check($request->get('old_password'),auth()->user()->password)){
            return $this->responseBadRequest('Mật khẩu hiện tại không chính xác');
        }

        auth()->user()->password = Hash::make($request->get('password'));

        return $this->response([
            'message' => 'Cập nhật mật khẩu thành công',
            'data' => $userRepository->getAuthUser()
        ]);

    }


}
