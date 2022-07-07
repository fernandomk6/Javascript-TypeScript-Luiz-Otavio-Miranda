function validarCPF(cpf) {
  if (!cpf.length || cpf.length !== 14) return false;

  const CPFOriginal = Array.from(cpf.replace(/\D+/g, ''));
  const CPFSemDigitos = CPFOriginal.slice(0, -2);
  const CPFVerificado = getCPFVerificado(CPFSemDigitos);

  return CPFVerificado.join() === CPFOriginal.join();
}

function getCPFVerificado(CPF) {
  const multiplicador = CPF.length === 9 ? 10 : CPF.length === 10 ? 11 : null;
  const total = CPF.reduce((total, digito, indice) => total += Number(digito) * (multiplicador - indice), 0);
  const digito = 11 - (total % 11);

  CPF = [...CPF, digito > 9 ? 0 : digito];

  return CPF.length === 11 ? CPF : getCPFVerificado(CPF);
}

console.log(validarCPF('070.987.720-03'));
