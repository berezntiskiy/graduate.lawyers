<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class SessionInfo
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        $check = Auth::check();
        $response->headers->set('session.auth', $check ? 'true' : 'false');
        if($check)
            $response->headers->set('session.userId', Auth::user()->id);
        return $response;
    }
}
