<?php

namespace App\Http\Requests;


class SectionRequest extends EntityRequest
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
            'name' => 'required|max:2553',
            'description' => 'required|max:2555',
        ];
    }

    public function entityRules()
    {
        return [
            'id' => 'required',
            'book_id' => 'required|exists:books,id',
        ];
    }
}
