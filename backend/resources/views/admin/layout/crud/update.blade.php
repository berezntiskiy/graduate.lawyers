<h3>Creation new entity</h3>

{!! BootForm::open()->action( route('admin.books.update', $book) )->put() !!}
{!! BootForm::bind($book) !!}

@include('admin.books.form.entity')


<div class="panel-group" id="accordion" role="tablist">
    @foreach(Config::get("translatable.locales") as $i => $lang)



        <div class="panel {{!isset($book[$lang]) ? 'panel-default' : 'panel-primary'}}">
            <div class="panel-heading" role="tab">
                <h4 class="panel-title">
                    @if(!isset($book[$lang]))
                        <a role="button" data-toggle="collapse" href="#form_lang_pannel-{{$lang}}">
                            Translation for {{['ru'=>'Russian', 'md' => 'Moldavian', 'en' => 'English'][$lang]}}
                        </a>
                    @else
                        <small class="pull-right">Can't be deleted</small>
                        Translation for {{['ru'=>'Russian', 'md' => 'Moldavian', 'en' => 'English'][$lang]}}
                    @endif
                </h4>
            </div>
            <div id="form_lang_pannel-{{$lang}}" class="panel-collapse collapse {{isset($book[$lang]) ? 'in' : ''}}"
                 role="tabpanel">
                <div class="panel-body">
                    <input type="hidden" class="activeLangFlag" name="activeLangs[{{$lang}}]"
                           value="{{isset($book[$lang]) ? 'true' : 'false'}}"/>
                    @include('admin.books.form.translations')
                </div>
            </div>
        </div>



    @endforeach
</div>


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