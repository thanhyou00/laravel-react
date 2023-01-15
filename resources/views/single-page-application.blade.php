<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Reactjs and Laravel</title>
</head>
<body class="font-poppins">
<div id="application"></div>

<script src="{{ mix('js/application.js') }}"></script>
</body>
</html>
