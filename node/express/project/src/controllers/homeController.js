function initialPage(request, response) {
  response.render('index');
};

function initialPagePost(request, response) {
  console.log(response.body);
  const {name, age} = request.body;
  response.send(`Você é o ${name} e você tem ${age} anos`);
};

module.exports.initialPage = initialPage;
module.exports.initialPagePost = initialPagePost;