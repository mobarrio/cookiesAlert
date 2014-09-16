cookiesAlert
============

Plugin que muestra una alerta de que la pagina utiliza cookies para solventar los requisitos del articulo 4 de la ley 13/2012



Ejemplo de uso:


    $(document).ready(function(){
        // La cookie de tracking tentra el prefijo "misitioweb"
        $.cookiesAlert({ 'prefix' : 'misitioweb' });
        

        // Si ponemos en true allcountry, aplica para cualquier pais.
        // El default es false (solo España)
        $.cookiesAlert({ 'prefix' : 'misitioweb', 'allcountry' : true });


        // Ejemplo con Callback
        var demo = function(){ alert("Pais origen España, politica de cookies aceptada."); }
        $.cookiesAlert({ 
        		'prefix' : 'misitioweb', 
        		'texto'  : "Usamos cookies propias y de terceros para mostrar publicidad personalizada seg&uacute;n su navegaci&oacute;n. Si continua navegando consideramos que acepta el uso de cookies."
        		}, demo);
    });
<br>
<b>Opciones</b>

        prefix:     STRING: Prefijo para distinguir la coockie de aceptacion entre diferentes sitios web.
        allcountry: BOOLEANO: true aplica para cualquier pais. Default false solo aplica a ESPAÑA.
        texto:      STRING: Texto a desplegarce en la caja de informacion.

<b>callback</b>
        callback:     FUNCION: Si se define, se ejecutara al momento de aceptar las politicas.
