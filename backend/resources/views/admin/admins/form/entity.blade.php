{!! BootForm::text('Name', 'name') !!}
{!! BootForm::text('Email', 'email') !!}
{!! BootForm::text('New password'.(!$isNew ? '(leave empty if don\'t what change)' : ''), 'new_password') !!}
