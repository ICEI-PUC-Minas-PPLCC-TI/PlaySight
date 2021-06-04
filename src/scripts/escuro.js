var modoEsc = 0;
function modoEscuro() {
   if(modoEsc == 0) {
      $("#modo_escuro").removeClass("btn-dark").addClass("btn-light")
      $("#modo_escuro").text("Light Mode");
      $("#header_escuro").addClass("escuro");
      $("#section_escuro").addClass("escuro");
      $("#footer_escuro").addClass("escuro");
      $("#body_escuro").addClass("escuro");
      $("#main_escuro").addClass("escuro");
      $("#caixa_escuro").addClass("escuro");
      modoEsc = 1;
   } else if(modoEsc == 1) {
      $("#modo_escuro").removeClass("btn-light").addClass("btn-dark")
      $("#modo_escuro").text("Dark Mode");
      $("#header_escuro").removeClass("escuro");
      $("#section_escuro").removeClass("escuro");
      $("#footer_escuro").removeClass("escuro");
      $("#body_escuro").removeClass("escuro");
      $("#main_escuro").removeClass("escuro");
      $("#caixa_escuro").removeClass("escuro");
      modoEsc = 0;
   }
}