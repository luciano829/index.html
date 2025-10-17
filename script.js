let totalGeral = 0;

// Adiciona item na tabela
function adicionarItem() {
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value) || 0;
  const qtd = parseInt(document.getElementById("quantidade").value) || 1;
  const total = valor * qtd;

  if (!descricao || valor <= 0) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const tabela = document.querySelector("#tabela-itens tbody");
  const linha = tabela.insertRow();

  linha.innerHTML = `
    <td>${descricao}</td>
    <td>${qtd}</td>
    <td>${valor.toFixed(2)}</td>
    <td>${total.toFixed(2)}</td>
  `;

  totalGeral += total;
  document.getElementById("totalGeral").innerText = totalGeral.toFixed(2);

  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("quantidade").value = "1";
}

// Gera PDF (futuramente usaremos jsPDF)
function gerarPDF() {
  alert("Em breve: função para gerar PDF do orçamento 📄");
}