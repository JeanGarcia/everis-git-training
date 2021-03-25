
document.addEventListener("DOMContentLoaded", function(event) {

    var lista_participantes = [];

    // Agregando a los participantes:
    lista_participantes.push("Jean Garcia");
    
    
    // generando lista en HTML
    lista_HTML = "";

    for (index in lista_participantes){
        lista_HTML = lista_HTML + "<li> " + lista_participantes[index] + "</li>";
    }

    // Listando los participantes en la página principal
    elemento_HTML = document.getElementById("participants");
    elemento_HTML.innerHTML = lista_HTML;

    // fin del script
});
