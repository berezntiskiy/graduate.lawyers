<?php

namespace App\Http\Requests;


class BookRequest extends TranslatableEntityRequest
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
            'name' => 'required|max:512',
            'description' => 'max:512',
        ];
    }

    public function entityRules()
    {
        return [
        ];
    }
}
