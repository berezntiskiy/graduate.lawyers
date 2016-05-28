<?php

namespace App\Http\Requests;


class ServiceRequest extends TranslatableEntityRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    
    public function translationRules()
    {
        return [
            'title' => 'required|max:512',
            'text' => 'required|min:10|max:512',
        ];
    }

    public function entityRules()
    {
        return [
        ];
    }
}
