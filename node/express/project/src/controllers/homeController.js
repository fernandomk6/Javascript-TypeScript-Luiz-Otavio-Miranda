function initialPage(request, response) {
  const form = `<form action="./" method="POST">
    <input placeholder="Nome" name="name" type="text">
    <input placeholder="Idade" name="age" type="number">
    <button type="submit">Enviar</button>
  </form>`;

  response.send(form);
};

function initialPagePost(request, response) {
  console.log(response.body);
  const {name, age} = request.body;
  response.send(`Você é o ${name} e você tem ${age} anos`);
};

module.exports.initialPage = initialPage;
module.exports.initialPagePost = initialPagePost;