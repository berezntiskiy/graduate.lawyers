<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\LogicException;
use App\Http\Controllers\Controller;
use App\Http\Controllers\RestController;
use Illuminate\Auth\Passwords\PasswordBroker;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Password;

class PasswordController extends RestController
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    public function ajaxReset(Request $request)
    {
        $broker = $this->getBroker();

        $response = Password::broker($broker)->sendResetLink(
            $request->only('email'), $this->resetEmailBuilder()
        );

        switch ($response) {
            case PasswordBroker::RESET_LINK_SENT:
                return [
                ];

            case PasswordBroker::INVALID_USER:
                throw new LogicException('INVALID_USER');

            default:
                throw new LogicException('UNHANDLED_EXCEPTION');
        }
    }
}
