try {
  console.log('tentarei executar');
  throw new Error('mensagem de erro');
} catch (error) {
  console.log('deu erro: ' + error.message);
} finally {
  console.log('conclui a execução');
}