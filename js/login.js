document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    let errorMessages = [];
    let isValid = false;
  
    while (!isValid) {
      // Lógica de validação dos campos do formulário
      let cpf = document.getElementById("cpf").value;
      let password = document.getElementById("password").value;
  
      errorMessages = [];
  
      // Verificação dos campos do formulário
  
      if (!/^\d{11}$/.test(cpf)) {
        errorMessages.push("O CPF deve conter 11 números.");
      }
  
      // Verificação de erros
      if (errorMessages.length > 0) {
        // Exibir mensagens de erro
        document.getElementById("msgError").innerHTML = errorMessages.join("<br>");
        break; // Sai do loop se houver erros
      } else {
        isValid = true; // Define isValid como true para sair do loop
      }
    }
  
    if (isValid) {
      // Limpar mensagens de erro
      document.getElementById("msgError").innerHTML = "";
  
      // Exibir mensagem de sucesso
      document.getElementById("msgSuccess").innerHTML = "Login realizado com sucesso!";
  
      // Reseta o formulário
      document.getElementById("registrationForm").reset();
  
      // Armazena os dados no localStorage
      localStorage.setItem('cpf', cpf);
      localStorage.setItem('cep', cep);
  
      // Redireciona para a página principal
      window.location.replace("../index.html");
    }
  });
  
  