// $(".alert") //pegando elemento pela classe
$("#alerta") //pegando elemento pelo ID

// document.getElementById("alerta").innerHTML = "Olá JQuery";
$("#alerta").html("<span>Olá Fernando!</span>");
// $("#alerta").html("<button class='btn btn-primary'>CLIQUE</button> ");
$("#alerta").append("<button class='btn btn-primary ml-3'>CLIQUE</button>");
$("#alerta").css("background-color", "#ddd" )
$("span").css({"background-color": "yellow", "font-size": "150%"});
$("button").hide() 
$("button").show()