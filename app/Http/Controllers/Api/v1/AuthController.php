<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    /**
     * API Register
     *
     * @param RegisterUserRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $inputs = $request->only('name','email','password','password_confirmation');
        $rules = [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|max:18|confirmed',
        ];
        $validator = Validator::make($inputs, $rules);
        if($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()]);
        }

        $user = new User();
        $user->name = filter_var(strip_tags(trim($request->get('name'))), FILTER_SANITIZE_STRING);
        $user->email = filter_var(strip_tags(trim($request->get('email'))), FILTER_SANITIZE_STRING);
        $user->password = bcrypt(filter_var(strip_tags(trim($request->get('password'))), FILTER_SANITIZE_STRING));
        $user->save();

        return response()->json([
            'success'=> true,
            ],201);
    }

    /**
     * API Login
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];
        $validator = Validator::make($credentials, $rules);
        if($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()]);
        }

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'success' => false,
                    'error' => 'We cant find an account with this credentials. Please make sure you entered the right information.'],
                    401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'success' => false,
                'error' => 'Failed to login, please try again.'],
                500);
        }
        return response()->json([
            'success' => true,
            'token' => $token],
        200);

    }

    /**
     * API Log out (invalidate the token)
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request) {
        $this->validate($request, ['token' => 'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json([
                'success' => true,
                'message'=> "You have successfully logged out."],
                200);
        } catch (JWTException $e) {
            return response()->json([
                'success' => false,
                'error' => 'Failed to logout, please try again.'],
                500);
        }
    }

    /**
     * API Refresh Token (refresh the token)
     * @param ['token']
     * @return \Illuminate\Http\JsonResponse
     */
    public function token(){
        $token = JWTAuth::getToken();
        if(!$token){
            return response()->json([
                'success' => false,
                'error' => 'Token not provided'],
                400);
        }
        try{
            $token = JWTAuth::refresh($token);
        }catch(TokenInvalidException $e){
            return response()->json([
                'success' => false,
                'error' => 'Invalid Token'],
                422);
        }
        return response()->json([
            'success' => true,
            'token' => $token],
            200);
    }

}
