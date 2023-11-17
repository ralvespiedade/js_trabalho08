// Função para realizar a operação matemática
function realizarOperacao(num1, num2) {
  return num1 / num2; // Aqui, por exemplo, é realizada uma divisão
}

// Função principal que solicita os números e executa a operação
function calcular() {
  let numero1 = prompt("Digite o primeiro número:");
  let numero2 = prompt("Digite o segundo número:");

  try {
    // Converte os números de string para float
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Por favor, insira valores numéricos válidos!");
    }

    // Realiza a operação
    let resultado = realizarOperacao(numero1, numero2);
    alert(`O resultado da divisão é: ${resultado}`);
  } catch (error) {
    alert(`Ocorreu um erro: ${error.message}`);
  } finally {
    alert("Fim da execução do programa.");
  }
}

// Chama a função principal
calcular();
