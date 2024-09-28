async function carregarHistoria() {
  const urlAPI = "https://66f7e075b5d85f31a343dc41.mockapi.io/api/historias";
  const resposta = await fetch(urlAPI);
  const historias = await resposta.json();
  console.log(historias);
  colocaAsHistoriasNoHTML(historias);
}

function colocaAsHistoriasNoHTML(listarHistorias) {
  //identificar o tbody (elemento pai)
  const tbody = document.getElementById("lista-historias");

  //limpar o tbody para não duplicar as historias
  tbody.innerHTML = "";

  //croar 1 <tr> com 3 <td> para cada historia
  listarHistorias.forEach((historia) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${historia.id}</td>
        <td>${historia.descricao}</td>
        <td><button onclick="excluirHistoria('${historia.id}')" class="btn-excluir">Excluir</button></td>`;
    tbody.appendChild(tr);
  });
}

async function excluirHistoria(id) {
  console.log(id);
  const urlAPI = `https://66f7e075b5d85f31a343dc41.mockapi.io/api/historias/${id}`;

  const detalhesRequisicao = {
    method: "DELETE",
  };
  //conversar com a api
  const resposta = await fetch(urlAPI, detalhesRequisicao);

  alert("Sua história foi deletada com sucesso!");
  carregarHistoria();
}

const botaoCadastrar = document.getElementById("btn-cadastrar");

botaoCadastrar.addEventListener("click", async (evento) => {
  evento.preventDefault();
  const descricaoDigitada = document.getElementById("descricao").value;
  //objeto historiaNova
  const historiaNova = {
    descricao: descricaoDigitada,
  };

  const detalhesRequisicao = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(historiaNova), //converte pra json
  };

  //conversar com a api
  const urlAPI = "https://66f7e075b5d85f31a343dc41.mockapi.io/api/historias";
  const resposta = await fetch(urlAPI, detalhesRequisicao);

  alert("Sua história foi cadastrada com sucesso!");
  carregarHistoria();
});

carregarHistoria();
