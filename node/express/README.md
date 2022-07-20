# Express

Express é um micro framework que é responsável por lidar com 
as rotas da aplicação a nivel de backend. 

O express é muito utilizado para criar APIs.

Básicamente ele irá gerenciar as rotas, e os metodos http e enviar
uma resposta adequada para cada roda acessada. Essa resposta pode ser
uma view ou um json ou qualquer coisa.

Uma unica rota pode fazer varias coisas dependendo do metodo http de sua
requisição.

## URL Params 

São os parametros que vão na rota. Como por exemplo `https://www.fernando.com/users/3`.
3 é o parametros. Um identificador de usuarios

```javascript
// localhost:3000/test/2

app.get('/test/:id?', function(request, response) {
  console.log(request.params);
  
  response.send('View de test');
});
```

Os parametros de URL devem ser antecedidos por `:` e caso sejam opcionais,
devem ser precedidos de `?`.

request.params é um objeto que ira conter `{id: 2}`.

## URL Query

Também são parametros que vão na URL, após o caractere `?`. 
Exemplo `https://www.fernando.com/users/3?premiium=true&rich=false`.
Após o `?` temos uma seção de chaves e valor premium (chave), true (valor), e 
cada chave e valor é separado por `&`. rick também é uma chave e seu valor é false.

```javascript
// http://localhost:3000/test/3/true?name=fernando&lastname=henrique

app.get('/test/:id?/:isRich?', function(request, response) {
  console.log(request.params); // { id: '3', isRich: 'true' }
  console.log(request.query); // { name: 'fernando', lastname: 'henrique' }

  response.send(`Seja bem vindo ${request.query.name} ${request.query.lastname}`);
});

```

As query são acessadas pela request.query. Lista um objeto com todas as chave e valores
passados na url como query string.

## Corpo da requisição

Dados sensiveis não podem ser passados pela URL. Por isso temos o corpo da requisição.
Geralmente usado em conjunto do método POST.

Usamos o request.body para ter acesso ao corpo da requisição.

```javascript
app.post('/', function(request, response) {
  response.send(request.body.name);
});
```

Sempre que for enviado um post para essa rota `/`, estamos enviando uma responsta (response.send)
com o conteudo do corpo da requisição `request.body.name`, onde name é uma propriedade
do objeto body.

Para ter acesso ao request.body adicione o seguinte codigo logo apos a declaração de seu app
`app.use(express.urlencoded({ extended: true }));`;

## Resumo parametros

Existem básicamente três formas de uma requisição enviar dados:

- URL Params -> www.site.com/users/1 onde 1 é o parametro da URL.
- URL Query -> www.site.com/users/1?isAdmin=false onde tudo que está após `?` são as URL query.
- Request.body -> Objeto enviado no corpo da requisição.

## Router e Controllers

Router é um método do express que fica responsavel por lidar com as rotas e direcionar cada 
rota a um controller.

- Controllers

Criamos uma pasta com nome controllers, nela terão varios arquivos. Cada erquivo
irá exportar uma função, que será responsável por lidar com cada rota.

```javascript
function initialPage(request, response) {
  response.send('Hello my friendzas');
};

module.exports.initialPage = initialPage;
```

- Router

Criamos também um arquivo routes, onde nele será listado cada roda. Porém usando o 
método Router do express.

```javascript
const express = require('express');
const route = express.Router();

const homeControler = require('./controllers/homeController');

route.get('/', homeControler.initialPage);

module.exports.route = route;
```

- Main.js

No arquivo principal da aplicação teremos o uso das rotas e dos controlers

```javascript
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));

// Usando as rotas
app.use(routes.route);

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});
```

## Views

Rendereizando as views com o express

```javascript
app.set('views', path.resolve(__dirname, 'src', 'views')); // setando o diretorio que conterá as views
app.set('view engine', 'ejs'); // informando que as views serão no formato ejs
```

Para isso precisaremos instalar o ejs `npm install ejs`.

No comtrole, utilizaremos o método render ao invés do send.

```javascript
// no controler

function initialPage(request, response) {
  response.render('index');
};
```

Esse index é o nome do arquivo que será buscado dentro da pasta padrão das views que foi setado
aqui `app.set('views', path.resolve(__dirname, 'src', 'views'));`.

O arquivo .ejs funciona quase que como um HTML porém com alguns "poderes", como por exemplo, fazer
condifionais loops e etc.

## conteúdo estático

CSS, logos, imagens.

Os arquivos estáticos ficam dentro da pasta public.

É necessário setar o caminho dos arquivos estáticos no arquivo core do express
`app.set(express.static(path));`. De forma real 
`app.use(express.static(path.resolve(__dirname, 'public')));`.


