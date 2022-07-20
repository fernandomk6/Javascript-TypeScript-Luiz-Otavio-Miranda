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

- URL Params
- Query Params

### URL Params 

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

### URL Query Params

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

### Resumo parametros

Existem básicamente três formas de uma requisição enviar dados:

- URL Params -> www.site.com/users/1 onde 1 é o parametro da URL.
- URL Query -> www.site.com/users/1?isAdmin=false onde tudo que está após `?` são as URL query.
- Request.body -> Objeto enviado no corpo da requisição.