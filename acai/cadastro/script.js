
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
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
  
   
    var anoNascimento = parseInt(dataNascimento.split("/")[2]);
    var idade = 2023 - anoNascimento;
    var isIdoso = idade > 60;
    document.addEventListener('DOMContentLoaded', function() {
      var dataNascimentoInput = document.getElementById('dataNascimento');
    
      dataNascimentoInput.addEventListener('input', function() {
        var valor = this.value;
        valor = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
        valor = valor.slice(0, 8); // Limita o valor a 8 dígitos (DDMMAAAA)
    
        // Formata a data no padrão DD/MM/AAAA
        var formattedValue = valor.replace(/^(\d{2})(\d{2})(\d{4})$/, '$1/$2/$3');
    
        this.value = formattedValue;
      });
    });
 
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
  
   
    var protocolo = generateProtocolNumber();
    function generateProtocolNumber() {
     
        var timestamp = new Date().getTime(); // 
        var randomNumber = Math.floor(Math.random() * 1000); // G9
        var protocolo = "PROTOCOL" + timestamp + randomNumber; 
      
        return protocolo;
      }
      
  
    // TODO Enviar os dados do formulário para o servidor ou realizar outras ações necessárias
  
  
    if (protocolo) {
        console.log("Formulário enviado com sucesso! Número de protocolo: " + protocolo);
       
        window.location.href = "redirecionamento.html?nomeBeneficiario=" + encodeURIComponent(nomeBeneficiario) + "&sexo=" + encodeURIComponent(sexo);
      } else {
        console.error("Ocorreu um erro ao enviar o formulário. Verifique os campos e tente novamente.");
      }
    });
  


 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);

 
 document.getElementById("nomeBeneficiario").textContent = urlParams.get("nomeBeneficiario");
 document.getElementById("sexo").textContent = urlParams.get("sexo");
 