<div class="clearfix">
    <a href="{{route($route . '.create')}}" class="btn btn-primary pull-right">Create</a>


    {!! BootForm::open()->addClass('form-inline')->get() !!}
    {!! BootForm::bind($query) !!}
    {!! BootForm::submit('Apply filter') !!}
    {!! BootForm::hidden('ord', isset($_GET['ord']) ? $_GET['ord'] : null) !!}
    {!! BootForm::checkbox(' With deleted?', 'withDeleted') !!}
    {!! BootForm::close($query) !!}


</div>
<style>
    .glyphicon-spin {
        -webkit-animation: spin 1000ms infinite linear;
        animation: spin 1000ms infinite linear;
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }

    @keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }
</style>
<script>
    var url = '{{route($route . '.destroy', ['id' => '%id%'])}}';
    function process(message, e, id, action) {
        var sure = confirm(message);
        e.preventDefault();
        var el = $(e.target);
        var clone = $(e.target).clone();
        var spinner = $('<span class="glyphicon glyphicon-refresh glyphicon-spin"> </span>');
        el.replaceWith(spinner);
        $.ajax({
            url: url.replace('%id%', id),
            method: 'DELETE',
            data: {
                action: action
            }
        }).success(function(){
            location.reload();
        }).fail(function(){
            spinner.replaceWith(clone);
        });
    }
    function processRestore(e, id) {
        process('Are you sure what to RESTORE this item?', e, id, 'restore');
    }
    function processDelete(e, id) {
        process('Are you sure what to DELETE this item?', e, id, 'delete');
    }
</script>
{!! $grid !!}