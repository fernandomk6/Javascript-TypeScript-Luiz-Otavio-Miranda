function validarCPF(cpf) {
  if (!cpf.length || cpf.length < 11) return false;

  const CPFOriginal = Array.from(cpf.replace(/\D+/g, ''));
  const CPFSemDigitos = CPFOriginal.slice(0, -2);
  const CPFVerificado = getDigitosVerificadores(CPFSemDigitos);

  return CPFVerificado.join(',') === CPFOriginal.join(',');
}

function getDigitosVerificadores(CPF) {
  const multiplicador = CPF.length === 9 ? 10 : CPF.length === 10 ? 11 : null;
  
  let resultado = CPF.reduce((total, digito, indice) => {
    return total += Number(digito) * (multiplicador - indice);
  }, 0);
  
  resultado = 11 - (resultado % 11);
  CPF = [...CPF, resultado.toString()];

  if (CPF.length === 11) return CPF;

  return getDigitosVerificadores(CPF) || [];
}

console.log(validarCPF('705.484.450-52'));
console.log(validarCPF(NaN));
