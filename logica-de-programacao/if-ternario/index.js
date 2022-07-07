// if ternário é recomendado quando precisamos armazenar algum valor
// e tanbém para operações mais curtas
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//   console.log('Usuário VIP');
// } else {
//   console.log('Usuário normal');
// }