<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class TranslatableEntityRequest extends Request
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $activeLangs = $this->request->get('activeLangs');
        $rules = [] + $this->entityRules();
        foreach ($activeLangs as $lang => $isActive) {
            if ($isActive == 'true')
                $rules[$lang] = $this->translationRules();
        }
        return array_dot($rules);
    }

    public function translationRules()
    {
        return [];
    }

    public function entityRules()
    {
        return [];
    }
}
