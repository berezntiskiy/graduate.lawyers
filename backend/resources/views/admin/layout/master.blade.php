<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>PocketLawyer - backend</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>
    <script>
        var CSRF_TOKEN = "{{ csrf_token() }}";
    </script>
    <script>
        $(function(){
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': CSRF_TOKEN
                }
            });
        });
    </script>
</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{!! route('admin.index') !!}">PocketLawyer</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                @foreach($menuLinks as $linkName => $route)
                    <li class="@if(strpos(Request::url(), route($route.'.index')) > -1) active @endif">
                        <a href="{!! route($route.'.index') !!}">{{$linkName}}</a>
                    </li>
                @endforeach
            </ul>
            <ul class="nav navbar-nav pull-right">
                <li>
                    <a href="/admin/logout">Logout ({{Session::get('admin_name')}})</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div><br><br><br><!-- space before header --></div>
    <div>
        @if($name)
            <h1 style="margin-top: 0;">{{ $name }}</h1>
        @endif
        {!! $content !!}
    </div>

</div><!-- /.container -->

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>
</html>
