<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\JWTAuth;


class JWTMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        try {
            \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->authenticate();
        } catch (TokenInvalidException $exception) {

            return response()->json([
                'data' => [],
                'message' => trans('auth.not_valid'),
                'log' => $exception->getMessage()
            ], ResponseAlias::HTTP_UNAUTHORIZED);

        } catch (TokenExpiredException $exception){

            return response()->json([
                'data' => [],
                'message' => trans('auth.not_valid'),
                'log' => $exception->getMessage()
            ],ResponseAlias::HTTP_FORBIDDEN);

        } catch (\Exception $exception) {

            return response()->json([
                'data' => [],
                'message' => trans('auth.not_valid'),
                'log' => $exception->getMessage()
            ],ResponseAlias::HTTP_BAD_REQUEST);

        }

        return $next($request);
    }
}
