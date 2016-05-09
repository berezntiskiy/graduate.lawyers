<?php
use App\Book;
use SleepingOwl\Admin\Model\ModelConfiguration;

AdminSection::registerModel(Book::class, function (ModelConfiguration $model) {
    $model->setTitle('Books');


    // Display
    $model->onDisplay(function () {
        return AdminDisplay::table()->setApply(function($query) {
            $query->orderBy('created_at', 'desc');
        })->setColumns([
            AdminColumn::text('name')->setLabel('Name'),
            AdminColumn::text('description')->setLabel('Description'),
//            AdminColumnEditable::checkbox('published')->setLabel('Published'),
        ])->paginate(10);
    });


//    // Create And Edit
//    $model->onCreateAndEdit(function() {
//        $form = AdminForm::form()->setItems([
//            AdminFormElement::text('title', 'Title')->required(),
//            AdminFormElement::date('date', 'Date')->required()->setFormat('d.m.Y'),
//            AdminFormElement::checkbox('published', 'Published'),
//            AdminFormElement::wysiwyg('text', 'Text'),
////            AdminFormElement::text('title', 'Title')->required(),
////            AdminFormElement::date('date', 'Date')->required()->setFormat('d.m.Y'),
////            AdminFormElement::checkbox('published', 'Published'),
////            AdminFormElement::wysiwyg('text', 'Text'),
//        ]);
//        $form->getButtons()
//            ->setSaveButtonText('Save news')
//            ->hideSaveAndCloseButton();
//        return $form;
//    });

    $model->onCreateAndEdit(function ($id = null) use ($model)
    {
        $form = AdminForm::form()->setItems([
            AdminFormElement::text('name', 'Title')->required(),
        ]);
        return $form;
        $form = AdminForm::panel()
            ->addBody([
//                AdminFormElement::text('name', 'name')->required(),
//                AdminFormElement::text('description', 'description')->required(),
//                AdminFormElement::textaddon('textaddon', 'TextAddon')
//                    ->setAddon('$')
//                    ->placeAfter(),
//                AdminFormElement::checkbox('checkbox', 'Checkbox'),
//                AdminFormElement::date('date', 'Date'),
//                AdminFormElement::time('time', 'Time'),
//                AdminFormElement::timestamp('timestamp', 'Timestamp')->setFormat('d.m.Y g:i A'),
            ]);
//            ->addBody([
//                AdminFormElement::select('select', 'Select')
//                    ->setOptions([
//                        1 => 'First',
//                        2 => 'Second',
//                        3 => 'Third'
//                    ])->nullable(),
//            ])
//            ->addBody([
//                AdminFormElement::image('image', 'Image'),
//                AdminFormElement::images('images', 'Images'),
//            ])
//            ->addBody([
//                AdminFormElement::textarea('textarea', 'Textarea'),
//                AdminFormElement::wysiwyg('ckeditor', 'Ckeditor'),
//            ]);
        return $form;
    });
});