<?php
if (session_id() == ''){ session_start(); }
error_reporting(0);
?>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="es" class="ie8"> <![endif]-->  
<!--[if IE 9]> <html lang="es" class="ie9"> <![endif]-->  
<!--[if !IE]><!--> <html itemscope itemtype="http://schema.org/Person" lang="es"> <!--<![endif]-->  
  <head>
    <!-- META DATA -->
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">    

    <meta name="description" content="LOPD Test">
    <title>LOPD TEST</title>


    <!-- BOTTSTRAP 3.2.0 y FontAwesome 4.2.0 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>
LOPD TEST!!!

<!-- Latest compiled and minified JavaScript -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="jquery.aviso-coockies.min.js"></script>

<script type="text/javascript">
    $(document).ready(function(){
        var test =  function(){
            console.log("Hola");
        }
        var texto = 'Utilizamos cookies propias y de terceros para mejorar la experiencia de usuario en la web.<br>Si continúa navegando en esta página, consideramos que acepta su uso en los términos indicados en la ';
        $.cookiesAlert({ 'prefix' : 'campdemar', 'texto' : texto },test);
    });

</script>

</body>
</html>

