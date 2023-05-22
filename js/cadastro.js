function validaPrimeiroNome(){
  let campo = document.querySelector('.name');
  let p = document.querySelector(".errorName")

  if (campo.value.length < 5){
      p.innerHTML = "Mínimo de 5 dígitos";
      campo.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
  } else {
      p.innerHTML = "";
      campo.style.cssText = "";
      return true;
  }
}

function validaSegundoNome(){
  let campo = document.querySelector('.lastName');
  let p = document.querySelector(".errorLastName")

  if (campo.value.length < 5){
      p.innerHTML = "Mínimo de 5 dígitos";
      campo.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
  } else {
      p.innerHTML = "";
      campo.style.cssText = "";
      return true;
  }
}

function validaCpf(){
  let campo = document.querySelector('.cpf');
  let p = document.querySelector(".errorCpf")

  if (!validarCPF(campo.value)){
      p.innerHTML = "CPF inválido!";
      campo.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
  } else {
      p.innerHTML = "";
      campo.style.cssText = "";
      return true;
  }
}

function validaCep(){
  let campo = document.querySelector('.cep');
  let p = document.querySelector(".errorCEP")

  if (!validarCEP(campo.value)){
      p.innerHTML = "CEP inválido!";
      campo.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
  } else {
      p.innerHTML = "";
      campo.style.cssText = "";
      return true;
  }
}

function validaPassword(){
  let campo = document.querySelector('.password');
  let p = document.querySelector(".errorPassword");

  if(campo.value.length < 6 || campo.value.length > 8){
      p.innerHTML = "A senha deve ter entre 6 e 8 caracteres";
      campo.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
  } else {
      p.innerHTML = "";
      campo.style.cssText  = "";
      return true;
  }
}

function validaConfirmPassword(){
  let password = document.querySelector('.password');
  let confirmPassword = document.querySelector('.confirmPassword');
  let p = document.querySelector(".errorConfirmPassword");

  if( password.value != confirmPassword.value){
      p.innerHTML = "As senhas devem ser iguais"
      return false;
  } else {
      p.innerHTML = ""
      return true;
  }
}

function validaEmail(){
  let campo = document.querySelector('.email');
  let p = document.querySelector(".errorEmail");

  if (campo.value.length < 5){
      p.innerHTML = "Mínimo de 5 dígitos";
      campo.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
  } else if(!campo.value.includes("@")){
      p.innerHTML = "O caracter @ é necessário";
      campo.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
  } else {
      p.innerHTML = "";
      campo.style.cssText  = "";
      return true;
  }
}

function validarCPF(cpf) {
cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

if (cpf.length !== 11 || isSequenciaRepetida(cpf)) {
  return false; // Verifica se o CPF possui 11 dígitos e não é uma sequência repetida
}

var soma = 0;
var resto;

for (var i = 1; i <= 9; i++) {
  soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
}

resto = (soma * 10) % 11;

if (resto === 10 || resto === 11) {
  resto = 0;
}

if (resto !== parseInt(cpf.charAt(9))) {
  return false; // Verifica o primeiro dígito verificador
}

soma = 0;

for (var i = 1; i <= 10; i++) {
  soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
}

resto = (soma * 10) % 11;

if (resto === 10 || resto === 11) {
  resto = 0;
}

if (resto !== parseInt(cpf.charAt(10))) {
  return false; // Verifica o segundo dígito verificador
}

return true; // CPF válido
}

function validarCEP(cep) {
  // Remove caracteres não numéricos
  cep = cep.replace(/\D/g, '');

  // Verifica se o CEP possui o tamanho correto
  if (cep.length !== 8) {
    return false;
  }

  // Verifica se o CEP é composto apenas por dígitos repetidos (ex: 11111111)
  if (isSequenciaRepetida(cep)) {
    return false;
  }

  return true;
}

function isSequenciaRepetida(cpf) {
  var sequencia = cpf.charAt(0).repeat(cpf.length);
  return sequencia === cpf;
}

function validaCamposVazios(){
  let validacao = validaPrimeiroNome() & validaSegundoNome() & validaCpf() & validaCep()  & validaPassword() & validaConfirmPassword() & validaEmail();

  if(validacao != 1){
      alert("Há campos com entradas inválidas!");
      return false;
  }

  return true;
}
