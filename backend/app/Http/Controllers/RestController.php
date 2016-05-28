<?php

namespace App\Http\Controllers;

use App\Book;
use App\Http\Middleware\ResponseWrap;
use Illuminate\Http\Request;

use App\Http\Requests;
use Mockery\CountValidator\Exception;

class RestController extends Controller
{
    protected $request = null;

    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->middleware(ResponseWrap::class);
    }
}
