var ongsDB = {
   data: [
      {
         id: 1,
         title: "LARAMARA",
         contato: "https://laramara.org.br/doe/",
      },
      {
         id: 2,
         title: "União dos Cegos no Brasil",
         contato: "http://uniaodoscegosnobrasil.org.br/doacao.html",
      },
      {
         id: 3,
         title: "Organização Nacional de Cegos do Brasil",
         contato: "https://www.oncb.org.br/doacao/",
      },
      {
         id: 4,
         title: "Centro de Apoio ao Deficiente Visual",
         contato: "http://cadevi.org.br/index.php/doacao/",
      },
   ]
};


$(document).ready(() => {
   localStorage.setItem("ongsDB", JSON.stringify(ongsDB))
   let obj = JSON.parse(localStorage.getItem("ongsDB"));
   if (!obj) {
      console.log("ERRO: Objeto vazio");
   } 
   else {
      $("#coluna-ongs").html("");
      for (i = 0; i < obj.data.length; i++) {
         console.log("DEBUG (carregarTable()): ", obj.data[i])
         let resultado = obj.data[i];
         console.log("DEBUG resultado: ", resultado);
         $("#coluna-ongs").append(`
         <div style="margin-bottom: 30px;">
            <h1 style="margin: 15px 0px; font-weight: bold;">${resultado.title}</h1>
            <p style="font-size: 20px;">Entre na página da doação <a href="${resultado.contato}" target="_blank">por aqui</a></p>
         </div>`);
      }
   }
});