/**
 * escreva uma função chamado ePaisagem que terá
 * 2 parametros, largura e altura de uma imagem (number)
 * retorne true se a imagem estiver no modo paisagem
 */

const ePaisagem = (largura, altura) => Number(largura) && Number(altura) ? largura > altura : false;

console.log(ePaisagem(10, 20));
console.log(ePaisagem(NaN, 20));