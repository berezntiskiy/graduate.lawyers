<?php

namespace App\Http\Requests;


class ArticleRequest extends EntityRequest
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
            'title' => 'required|max:2553',
            'text' => 'required|max:2555',
        ];
    }

    public function entityRules()
    {
        return [
            'chapter_id' => 'required|exists:chapters,id',
        ];
    }
}
