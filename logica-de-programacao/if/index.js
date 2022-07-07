const hora = 13;
// ifs possui escopo de bloco
if (hora >= 0 && hora <= 11) {
  console.log('bom dia');
} else if(hora >= 12 && hora <= 17) {
  console.log('boa tarde');
} else {
  console.log('olá');
}

// apartir da primeira condicao avalidade como truthy, o codigo é executado
// e saimos do bloco if
if (true) {
  console.log('primeira checagem');
} else if (true) {
  console.log('segunda cehcagem');
} else {
  console.log('nada deu certo..');
}