<?php

namespace App\Http\Middleware;

use Closure;

class ResponseWrap
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

        if ($response->headers->get('content-type') == 'application/json') {
            $response->setContent(json_encode(array(
                'status' => 'ok',
                'data' => json_decode($response->getContent()),
            )));
        }

        return $response;
    }
}
