<?php

namespace App\Exceptions;

use Exception;

class LogicException extends Exception {
    private $data;

    public function __construct($message, $data = [])
    {
        $this->data = $data;
        parent::__construct($message);
    }

    public function getData()
    {
        return $this->data;
    }
}