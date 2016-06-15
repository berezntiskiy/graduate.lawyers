<?php

namespace App\Http\Middleware;

use Closure;

class ResponseWrap
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if ($request->headers->get('content-type') == 'application/json') {
            $response->setContent(json_encode(array(
                'status' => $response->status() == 200 ? 'ok' : 'error',
                'data' => json_decode($response->getContent()),
            )));
            $response->header('Content-Type', 'application/json');
        }

        return $response;
    }
}
