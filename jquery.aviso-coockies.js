;var sheet = (function() {
    // Create the <style> tag
    var style = document.createElement("style");

    // Add a media (and/or media query) here if you'd like!
    //style.setAttribute("media", "screen")
    //style.setAttribute("media", "only screen and (max-width : 1024px)")

    // WebKit hack :(
    style.appendChild(document.createTextNode("#alerta_coockies{border: 1px solid #FFF;padding: 15px;position: fixed;bottom: 0px;left: 0;right: 0;margin-left: auto;margin-right: auto;width: 100%;cursor: pointer;background-color: rgba(252, 252, 252, 1);z-index: 999999;}"));
    style.appendChild(document.createTextNode(".alerta_coockies_button{position: absolute;top: 0;right: 2px;}"));
    style.appendChild(document.createTextNode("#alerta_coockies #alerta_coockies_body p{font-family: Helvetica, Arial, sans-serif;  font-size: 11px;  font-weight: normal;  line-height: 18px;  text-rendering: optimizeLegibility;text-align: center; /*justify;*/}"));
    
    // Add the <style> element to the page
    document.head.appendChild(style);

    return style.sheet;
})();


;(function( $, window, document, undefined ){
	var debug = 0;
	$.cookiesAlert = function(options,callback) {

		var defaults = {
            prefix     : "default",
            texto      : "Usamos cookies propias y de terceros para mostrar publicidad personalizada seg&uacute;n su navegaci&oacute;n. Si continua navegando consideramos que acepta el uso de cookies. ",
            polURI	   : "./politica_coockies.php",
            allcountry : false,
            debug      : 0
        }
 
        var settings = {}

        settings = $.extend({}, defaults, options);
        debug = settings.debug;

        if(debug) console.log("Modo debug Activado");

        if(options == 'PonerCookie'){
            PonerCookie(settings.prefix);
            if(debug) console.log("Coockie configurada.");
        }else{
			var prefix = settings.prefix;
			var newDiv=null;
		    if(debug) console.log("Coockie: aviso_articulo_4_ley_13_2012_"+prefix);
		    if(getCookie('aviso_articulo_4_ley_13_2012_'+prefix)!="1"){
		    	if(debug) console.log("Coockie no configurada.");
	            newDiv = document.createElement('div');
	            newDiv.setAttribute('id','alerta_coockies');
	            $(newDiv).appendTo('body');
			    $("#alerta_coockies").append('<div id="alerta_coockies_body"></div>');
			    $("#alerta_coockies_body").append('<p>'+settings.texto+'&nbsp;<a href="'+settings.polURI+'" target="_blank">Pol&iacute;tica de Cookies</a>.</p>');
			    $("#alerta_coockies_body").append('<span class="alerta_coockies_button"><i class="fa fa-times"></i></span>');
				$.ajax({
				    url: 'http://freegeoip.net/json/',
				    dataType: 'json',
				    type: 'GET',
				    success: function(data){
				    	if(debug) console.log("freegeoip.net Info:",data);
					    if((data.country_code === "ES" || settings.allcountry ) && getCookie('aviso_articulo_4_ley_13_2012_'+prefix)!="1"){
							$("#alerta_coockies").css("display",'block');
						}
						if (callback && typeof(callback) === "function") callback();
				    }
				});

				$('.alerta_coockies_button').on('click',function(evt){
					evt.preventDefault();
					PonerCookie(prefix);
					if(debug) console.log("Coockie configurada.");
				});
		    }else{
		    	if(debug) console.log("Coockie configurada.");
		    }

        }
    }

	function getCookie(c_name){
		var c_value = document.cookie;
		var c_start = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1){
			c_start = c_value.indexOf(c_name + "=");
		}
		if (c_start == -1){
			c_value = null;
		}else{
			c_start = c_value.indexOf("=", c_start) + 1;
			var c_end = c_value.indexOf(";", c_start);
			if (c_end == -1){
				c_end = c_value.length;
			}
			c_value = unescape(c_value.substring(c_start,c_end));
		}
		return c_value;
	}

	function setCookie(c_name,value,exdays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=c_name + "=" + c_value;
	}

	function PonerCookie(prefix){
		setCookie('aviso_articulo_4_ley_13_2012_'+prefix,'1',365);
		$("#alerta_coockies").slideUp( 300, function() { $("#alerta_coockies").remove(); });		
	}
})( jQuery, window, document );

