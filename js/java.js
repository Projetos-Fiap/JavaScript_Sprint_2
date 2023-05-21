document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Lógica de validação dos campos do formulário
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    document.getElementById("msgError").innerHTML = "Por favor, preencha todos os campos.";
  } else if (password !== confirmPassword) {
    document.getElementById("msgError").innerHTML = "As senhas não correspondem.";
  } else {
    document.getElementById("msgError").innerHTML = ""; // Limpa a mensagem de erro
    document.getElementById("msgSuccess").innerHTML = "Cadastro realizado com sucesso!"; // Exibe mensagem de sucesso
    document.getElementById("registrationForm").reset(); // Reseta o formulário
    
    // Armazena os dados no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }
});

//permite eu ver ou nao a senha
document.getElementById("verSenha").addEventListener("click", function() {
  var senhaInput = document.getElementById("password");
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
});

document.getElementById("verConfirmSenha").addEventListener("click", function() {
  var confirmSenhaInput = document.getElementById("confirmPassword");
  if (confirmSenhaInput.type === "password") {
    confirmSenhaInput.type = "text";
  } else {
    confirmSenhaInput.type = "password";
  }
});


  