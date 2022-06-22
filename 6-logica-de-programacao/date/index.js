// o objeto Date esta para datas assim como Math esta para operações matematicas
const data = new Date();
console.log(data); // 2022-06-22T16:19:09.954Z
console.log(data.toString()); // Wed Jun 22 2022 13:20:08 GMT-0300 (Horário Padrão de Brasília)

const dataZero = new Date(0);
console.log(dataZero); // 1970-01-01T00:00:00.000Z
// a data zero é 01 01 1970 timestamp unix ou epoca unix

// data zero mais 3 horas
const tresHoras = 60 * 60 * 3 * 1000;
const dataZero3Horas = new Date(tresHoras);
console.log(dataZero3Horas); // 1970-01-01T03:00:00.000Z
// perceba que o retorno foi as 3h a frente da hora zero

// O objeto data recebe um numero em milesimos de segundos e retorna um 
// objeto data com a data zero acrescentado esses milesimos de segundos 
// passados por referencia

// para datas anteriores a 1970 passe um number negativo como argumento de Date()

// quando não passado nenhum argumento, o constructor Date retorna um objeto com 
// a data atual
const dataAgora = new Date();
console.log(dataAgora);

// podemos também criar uma data especifica

// ano, mes, dia, hora, minutos, segundos, milisegundos
// perceba que o mes é zero base. Janeiro é 0 dezembro é 11
const dataEspecifica = new Date(1998, 7, 21, 14, 00, 06, 500);
console.log(dataEspecifica.toString());


// criando apartir de strings
// ou o argumento pode ser assim tbm '1998-08-21T14:00:07.555'
// substituindo T pelo espaço
// parametros ano-mes-dia(espaço ou T)hora:minuto:segundos.milisegundo
const dataNascimento = new Date('1998-08-21 14:00:07.555');
console.log(dataNascimento.toString());

// extraindo dados da data
const milisegundo = dataNascimento.getMilliseconds();
const segundo = dataNascimento.getSeconds();
const minuto = dataNascimento.getMinutes();
const hora = dataNascimento.getHours();
const dia = dataNascimento.getDate();
const diaSemana = dataNascimento.getDay(); // 0 - domingo, 6 - sabado
const mes = dataNascimento.getMonth(); // 0 - janeiro, 11 - dezembro
const ano = dataNascimento.getFullYear();

// perceba getDay retorna o numero do dia da semana
// get date, retorna o numero do dia no mes
// perceba que o get month é zero based, janeiro é 0 dezembro é 11
console.log(`
  dia ${dia}, mes ${mes}, ano ${ano} hora ${hora} minutos ${minuto} 
  segundos ${segundo} milisegundos ${milisegundo} dia da semana ${diaSemana}
`);

// obeter milessimos de segundos da data zero até a data de hoje
console.log(Date.now());
// com isso é possivel pegar a data de hoje com os milessimos de segundos
console.log((new Date(Date.now())).toString());

// criando função que formata uma data
function zeroAEsquerda(aNumber) {
  return aNumber < 10 ? `0${aNumber}` : aNumber;
}

function formataDate(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const horas = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

const dataAtual = new Date();
const dataBrasil = formataDate(dataAtual)
console.log('data brasil', dataBrasil);
