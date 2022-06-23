// Curto circuito em if e seu retorno, tentar simular um bug. 
// if( false && (algo que gera um bug) ) vai gerar o bug o vai seguir a mesma logica dos curtos circuitos?

if (false && test) {
  console.log('passou');
} else {
  console.log('não passou');
}