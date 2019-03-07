var pepe = "hola";

$(document).ready(function(){
    $("#iconomenu").click(function(){
        $("#contenedorOpciones").slideToggle();
    });
});

// Al llevar el ratón fuera de los límites del contenedor, éste se oculta
$( ".menu" ).mouseleave(function() {
    $( "#contenedorOpciones" ).hide(500);
});

//$(".menu").hover(function(){
//    $("#contenedorOpciones").show();
//}, function(){
//    $("#contenedorOpciones").hide();
//});
//
//$(document).ready(function(){
//    $("#divGaleriaPrincipal").mouseover(function(){
//        $("#menuC").hide(500);
//    });
//});

var secciones = [];

$(document).ready(function () { //Generación de botones

    //var j = Object.keys($.getJSON("json/json1.json")).length;
    //var sec = $(this).attr('name');
    
    $.getJSON("json/json.json", function(carga) {

        
        //var secciones = [];
        secciones = [];
        for(name in carga)
            secciones.push(name);

        //alert(carga[secciones[0]][0].imagenes[0].img);

        var htmlInterno1 = "<div id=\"divGaleriaSecciones\">" + "<h1>Galería </h1>";
        var htmlInterno2 = "<div id=\"divGaleriaSubSecciones\">";        
        
        for (var i = 0; i < secciones.length; i++) {
            var nAnterior = i - 1;
            var nAdelante = i + 1;

            htmlInterno1 += ("<div class=\"seccion\" id=\"seccion" + i + "\" name=\"" + i + "\">" //PINTA BOTONES SECCIONES
                + "<div class=\"divGaleriaImg\" name=\"" + i + "\">"
                    + "<img class=\"img1\" name=\"" + i + "\" src=\"" + carga[secciones[i]][0].imagenes[0].img + "\"></img>"
                + "</div>"
                + "<div class=\"NombreSeccion\" name=\"" + i + "\"><p>" + secciones[i] + "</p>"
                + "</div>"
            + "</div>");

            var galeriasLength = carga[secciones[i]].length;
            if (galeriasLength > 0) {
                htmlInterno2 += ("<div class=\"divGaleriaMiniaturas\" id=\"subSeccion" + i + "\" >"
                    + "<h1>Galería: " + secciones[i] + "</h1>")
                    + "<div id=botGaleriaMain\"" + i + "\" class=\"arriba\" onclick=\"clickUno()\"><img  class=\"imgControl\" src=\"iconos/rewind.png\"></div>"
                if (nAnterior >= 0) {
                    //htmlInterno2 += ("<button id=\"botGaleriaPrimero\" class=\"botDetalle\">Pa\'start</button>");
                    htmlInterno2 += ("<div id=\"botGaleriaAtras" + nAnterior + "\" class=\"detras\"><img class=\"imgControl\" src=\"iconos/back.png\"></div>");
                }
                if (nAdelante < secciones.length) {
                    htmlInterno2 += ("<div id=\"botGaleriaAdelante" + nAdelante + "\" class=\"delante\"><img class=\"imgControl\" src=\"iconos/next.png\"></div>");
                    //htmlInterno2 += ("<button id=\"botGaleriaUltimo\" class=\"botDetalle\">Pa\'finish</button>");
                }

                for(var j = 0; j < galeriasLength; j++) {
                    htmlInterno2 += ("<div class=\"seccion seccionNiv2\">"
                        + "<div class=\"detalle\" id=\"detalle" + i + "-" + j + "\" >" 
                        + "<img class=\"img2\" src=\"" + carga[secciones[i]][j].imagenes[0].img + "\"></img>"
                        + "<div class=\"NombreSeccion\"><p>" + carga[secciones[i]][j].nombre +"</p>"
                    + "</div></div></div>");
                }
                htmlInterno2 += ("</div>");
            }
        }
        htmlInterno2 += ("</div>");
        htmlInterno1 += ("</div>");

        $("#uno").html(htmlInterno1);
        $("#dos").html(htmlInterno2);
    });
});

/*MOSTRAR U OCULTAR AL PINCHAR EN MENU */

$(document).ready(function(){
    $.getJSON("json/json.json", function(carga) {
        secciones = [];
        for(name in carga)
            secciones.push(name);
    });

    $("#menu1").click(function(){ 
        $("#divGaleriaPrincipal").fadeIn("slow");
        $("#uno").fadeIn("slow");
        $("#secciones").fadeIn("slow");
        $("#divCV").fadeOut("slow");
        $("#divFormulario").fadeOut("slow");
        $("#dos").fadeOut("slow");
        $("#divGaleriaDetalles").fadeOut("slow");
        $("#tres").fadeOut("slow");
        $("body").css({background:"white"});
    });

    $("#menu2").click(function(){ 
        $("#divGaleriaPrincipal").fadeOut("slow");
        $("#divCV").fadeOut("slow");
        $("#divFormulario").fadeIn("slow");
        $("body").css({background:"white"});
    });

    $("#menu3").click(function(){ 
        $("#divGaleriaPrincipal").fadeOut("slow");
        $("#divCV").fadeIn("slow");
        $("#divFormulario").fadeOut("slow");
        $("body").css({background:"white"});
    });

    $("#menu4").click(function(){ 
        $("#divGaleriaPrincipal").fadeIn("slow");
        $("#uno").fadeIn("slow");
        $("#secciones").fadeIn("slow");
        $("#divCV").fadeOut("slow");
        $("#divFormulario").fadeOut("slow");
        $("#dos").fadeOut("slow");
        $("#divGaleriaDetalles").fadeOut("slow");
        $("#tres").fadeOut("slow");
        $("body").css({background:"white"});
    });

    $("#menu5").click(function(){ 
        $("#divGaleriaPrincipal").fadeOut("slow");
        $("#divCV").fadeOut("slow");
        $("#divFormulario").fadeIn("slow");
        $("body").css({background:"white"});
    });

    $("#menu6").click(function(){ 
        $("#divGaleriaPrincipal").fadeOut("slow");
        $("#divCV").fadeIn("slow");
        $("#divFormulario").fadeOut("slow");
        $("body").css({background:"white"});
    });
        /*Retorno al inicio*/
    $("#titulo").click(function(){ 
        $("#divGaleriaPrincipal").fadeOut("slow");
        $("#divCV").fadeOut("slow");
        $("#divFormulario").fadeOut("slow");
    });

/* Desde CV*/
        
    /*GALERIA niv 1 al 2*/

    setTimeout(function () {
        for(var i = 0; i < secciones.length; i++)
        {
            var idSeccion = "#seccion" + i;
            //alert(idSeccion);
            $(idSeccion).click(function(){
                //alert(this.id.slice(-1));
                i = this.id.split("n").pop(); 
                $("#uno").fadeOut("slow");
                $("#dos").fadeIn("slow");
                $("#tres").fadeOut("slow");
    
                for(var j = 0; j < secciones.length; j++) {
                    var idSubSeccion = "#subSeccion" + j;
                    if (i != j) {
                        $(idSubSeccion).fadeOut("slow");
                    }
                    else {
                        $(idSubSeccion).fadeIn("slow");
                    }
                }
            });        

            var idBotGaleriaAtras = "#botGaleriaAtras" + i;
            $(idBotGaleriaAtras).click(function(){
                i = this.id.split("s").pop(); //coge el ultimo valor detras de la ultima S
                var galAnterior = "#seccion" + i;
                $(galAnterior).click();
                /*$("#uno").fadeOut("slow");
                $("#dos").fadeIn("slow");
                $("#tres").fadeOut("slow");
    
                for(var j = 0; j < secciones.length; j++) {
                    var idSubSeccion = "#subSeccion" + j;
                    if (i != j) {
                        $(idSubSeccion).fadeOut("slow");
                    }
                    else {
                        $(idSubSeccion).fadeIn("slow");
                    }
                }*/
            });

            var idBotGaleriaAdelante = "#botGaleriaAdelante" + i;
            $(idBotGaleriaAdelante).click(function(){
                i = this.id.split("e").pop(); //Coge el valor detrás de la última E
                var galSiguiente = "#seccion" + i;
                $(galSiguiente).click();
                /*$("#uno").fadeOut("slow");
                $("#dos").fadeIn("slow");
                $("#tres").fadeOut("slow");
    
                for(var j = 0; j < secciones.length; j++) {
                    var idSubSeccion = "#subSeccion" + j;
                    if (i != j) {
                        $(idSubSeccion).fadeOut("slow");
                    }
                    else {
                        $(idSubSeccion).fadeIn("slow");
                    }
                }*/
            });
        }
        
        /*
        var idBotGaleriaPrimero = "#botGaleriaPrimero";
        $(idBotGaleriaPrimero).click(function(){ alert("cacafuti");
            $("#uno").fadeOut("slow");
            $("#dos").fadeIn("slow");
            $("#tres").fadeOut("slow");
    
            for(var j = 0; j < secciones.length; j++) {
                var idSubSeccion = "#subSeccion" + j;
                if (j != 0) {
                    $(idSubSeccion).fadeOut("slow");
                }
                else {
                    $(idSubSeccion).fadeIn("slow");
                }
            }
        });            
    
        var idBotGaleriaUltimo = "#botGaleriaUltimo";
        $(idBotGaleriaUltimo).click(function(){
            $("#uno").fadeOut("slow");
            $("#dos").fadeIn("slow");
            $("#tres").fadeOut("slow");
    
            for(var j = 0; j < secciones.length; j++) {
                var idSubSeccion = "#subSeccion" + j;
                if (j != secciones.length -1) {
                    $(idSubSeccion).fadeOut("slow");
                }
                else {
                    $(idSubSeccion).fadeIn("slow");
                }
            }
        });
        */
    }, 500); 

    /*GALERIA niv 2 al 3*/

    setTimeout(function () {
        $(".detalle").click(function(coordenadas){
            coordenadas= this.id.split("e").pop();
            $.getJSON("json/json.json", function(carga) {
                var i = coordenadas.split("-")[0];
                var j = coordenadas.split("-")[1];
            
                secciones = [];
                for(name in carga)
                    secciones.push(name);
                
                var subGaleriasLength = carga[secciones[i]][j].imagenes.length;

                var htmlInterno3 = "<div id=\"divGaleriaDetalles\">";
                if (subGaleriasLength > 0) { 
                    htmlInterno3 += ("<div class=\"no\">"
                    + "<h1>Galería: " + secciones[i] + "</h1>"                    
                    + "<div class=\"arriba\"  id=botGaleriaArriba\"" + i + "\" onclick=\"clickArriba(" + i + ")\"><img class=\"imgControl\" src=\"iconos/rewind.png\"></div>"
                    + "<h2>" + carga[secciones[i]][j].nombre + "</h2>"
                    + "<p>" + carga[secciones[i]][j].descripcion + "</p>"
                    + "<div class=\"subDetalles\">");
                    for(var k = 0; k < subGaleriasLength; k++) {
                        htmlInterno3 += ("<div class=\"subDetalle\">" 
                            + "<img class=\"img3\" src=\"" + carga[secciones[i]][j].imagenes[k].img + "\"></img>"
                        + "</div>");
                    }
                    htmlInterno3 += ("</div>");
                }                    
                htmlInterno3 += ("<button id=\"botDetalle\" class=\"botDetalle\" onclick=\"clickDos()\">Encargos</button></div></div>");

                $("#tres").html(htmlInterno3);
            });
            $("#uno").fadeOut("slow");
            $("#dos").fadeOut("slow");
            $("#tres").fadeIn("slow");
        })
    }, 600);
    

});

function clickUno() { 
    $("#menu1").click();
}

function clickDos() { 
    $("#menu2").click();
}

function clickArriba(nGaleria) {
    var galArriba = "#seccion" + nGaleria;
    $(galArriba).click();
}