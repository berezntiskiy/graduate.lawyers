<?php

namespace App\Http\Middleware;

use Closure;

class ResponseWrap
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if ($response->headers->get('content-type') == 'application/json') {
            $response->setContent(json_encode(array(
                'status' => $response->status() == 200 ? 'ok' : 'error',
                'data' => json_decode($response->getContent()),
            )));
        }

        return $response;
    }
}
