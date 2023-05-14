
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obter os valores dos campos de cadastro
    var nomeBeneficiario = document.getElementById("nome").value;
    var sexo = document.getElementById("sexo").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var estadoCivil = document.getElementById("estadoCivil").value;
    var cpf = document.getElementById("cpf").value;
    var nomeMae = document.getElementById("nomeMae").value;
    var rg = document.getElementById("rg").value;
    var endereco = document.getElementById("endereco").value;
    var uf = document.getElementById("uf").value;
    var cidade = document.getElementById("cidade").value;
    var possuiRenda = document.getElementById("possuiRenda").value;
    var mulherChefeFamilia = document.getElementById("mulherChefeFamilia").value;
    var valorRenda = document.getElementById("rendaFamiliar").value;
    var pcdFamilia = document.getElementById("pcd").value;
    var idososFamilia = document.getElementById("idosos").value;
    var receberBolsaFamilia = document.getElementById("recebeBolsaFamilia").value;
  
    // Verificar se o beneficiário é um idoso
    var anoNascimento = parseInt(dataNascimento.split("/")[2]);
    var idade = 2023 - anoNascimento;
    var isIdoso = idade > 60;
  
    // Verificar se anexos são necessários para PCDs e idosos
    var anexoLaudoPCD = document.getElementById("anexoLaudoPCD");
    var idadeIdosos = document.getElementById("idadeIdosos");
    var anexoRecibo = document.getElementById("anexoRecibo");
  
    if (pcdFamilia === "S") {
      anexoLaudoPCD.style.display = "block";
    } else {
      anexoLaudoPCD.style.display = "none";
    }
  
    if (idososFamilia === "S") {
      idadeIdosos.style.display = "block";
    } else {
      idadeIdosos.style.display = "none";
    }
  
    if (receberBolsaFamilia === "S") {
      anexoRecibo.style.display = "block";
    } else {
      anexoRecibo.style.display = "none";
    }
  
    // Realizar outras verificações e processamentos necessários
  
    // Gerar número de protocolo único
    var protocolo = generateProtocolNumber();
    function generateProtocolNumber() {
        // Lógica para gerar um número de protocolo único
        // Pode ser um algoritmo baseado em timestamp, UUID, sequencial, etc.
        var timestamp = new Date().getTime(); // Obtém o timestamp atual
        var randomNumber = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 999
        var protocolo = "PROTOCOL" + timestamp + randomNumber; // Concatena o timestamp e o número aleatório
      
        return protocolo;
      }
      
  
    // Enviar os dados do formulário para o servidor ou realizar outras ações necessárias
  
    // Redirecionar para a página de redirecionamento com os dados do formulário
    if (protocolo) {
        console.log("Formulário enviado com sucesso! Número de protocolo: " + protocolo);
        // Redirecionar para a página de redirecionamento com os parâmetros na URL
        window.location.href = "redirecionamento.html?nomeBeneficiario=" + encodeURIComponent(nomeBeneficiario) + "&sexo=" + encodeURIComponent(sexo);
      } else {
        console.error("Ocorreu um erro ao enviar o formulário. Verifique os campos e tente novamente.");
      }
    });
  

 // Obtenha os dados enviados através da URL
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);

 // Preencha os dados na página de redirecionamento
 document.getElementById("nomeBeneficiario").textContent = urlParams.get("nomeBeneficiario");
 document.getElementById("sexo").textContent = urlParams.get("sexo");
 // Preencha outros dados do formulário

 // Você pode adicionar mais lógica aqui para manipular os anexos, se necessário