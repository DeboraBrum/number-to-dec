const numeroEntrada = document.querySelector("#numero"),
  button = document.querySelector(".convert"),
  numeroSaida = document.querySelector(".numero-saida"),
  base = document.querySelector("select"),
  divErro = document.querySelector(".msg-erro"),
  erro = document.querySelector(".erro");

button.addEventListener("click", () => {
  if(!numeroEntrada.value){
    divErro.classList.remove('hidden');
    erro.textContent = "Informe um número";
    numeroSaida.classList.add('hidden');
    numeroSaida.textContent = "";
    return;  
  }
  if(!base.value){
    divErro.classList.remove('hidden');
    erro.textContent = "Selecione a base correspondente";
    return;
  }
  const convert = parseInt(numeroEntrada.value, base.value);

  //Condicional para quando não conseguir converter
  if(Number.isNaN(convert)){
    divErro.classList.add('hidden');
    numeroSaida.classList.remove('hidden');
    numeroSaida.textContent = "Não é um número";
    return;
  }
  
  divErro.classList.add('hidden');
  numeroSaida.classList.remove('hidden');
  numeroSaida.textContent = convert;
});
