<h3>{{$isNew ? 'New entity creation' : 'Updating entity'}}</h3>

@if ($isNew)
    {!! BootForm::open()->action( route('admin.'.$name.'.store') )->post() !!}
@else
    {!! BootForm::open()->action( route('admin.'.$name.'.update', $entity) )->put() !!}
    {!! BootForm::bind($entity) !!}
@endif
@include('admin.'.$name.'.form.entity')

@if($hasTranslations)
<div class="panel-group" id="accordion" role="tablist">
    @foreach(Config::get("translatable.locales") as $i => $lang)
    {{-- */$isLocaleActive = isset($entity[$lang]) || $i == 0;/* --}}


        <div class="panel {{!$isLocaleActive ? 'panel-default' : 'panel-primary'}}">
            <div class="panel-heading" role="tab">
                <h4 class="panel-title">
                    @if(!$isLocaleActive)
                        <a role="button" data-toggle="collapse" href="#form_lang_pannel-{{$lang}}">
                            Translation for {{['ru'=>'Russian', 'md' => 'Moldavian', 'en' => 'English'][$lang]}}
                        </a>
                    @else
                        <small class="pull-right">Can't be deleted</small>
                        Translation for {{['ru'=>'Russian', 'md' => 'Moldavian', 'en' => 'English'][$lang]}}
                    @endif
                </h4>
            </div>
            <div id="form_lang_pannel-{{$lang}}" class="panel-collapse collapse {{$isLocaleActive ? 'in' : ''}}"
                 role="tabpanel">
                <div class="panel-body">
                    <input type="hidden" class="activeLangFlag" name="activeLangs[{{$lang}}]"
                           value="{{$isLocaleActive ? 'true' : 'false'}}"/>
                    @include('admin.'.$name.'.form.translations')
                </div>
            </div>
        </div>

    @endforeach
</div>
@endif

{!! BootForm::submit('Submit') !!}
{!! BootForm::close() !!}

<style>
    .panel[locked] {
        background: red;
    }

    .lang-block {
        border: 1px solid red;
        margin: 15px 0;
        padding: 15px;
        box-sizing: border-box;
    }
</style>

<script>
    $(function () {
        $('a[data-toggle="collapse"]').click(function () {
            var el = $(this);
            var target = $(el.attr('href'));
            var isIn = target.hasClass('in');
            if (isIn)
                if (!confirm('Are you sure what to delete translation?')) {
                    target.find('.activeLangFlag').val('false');
                    return false;
                }
            target.find('.activeLangFlag').val('true');
        });
        var lang_block = $('.lang-block');
        lang_block.each(function () {
            var el = $(this);
            var lang_key = el.attr('lang-key');
            var lang_value = el.attr('lang-value');
            var isCreated = el.attr('lang-isCreated') === 'true';


            var input = $('<input/>', {type: 'text', value: (isCreated), name: 'activeLangs[' + lang_value + ']'});
            el.append(input);
        });
    });
</script>