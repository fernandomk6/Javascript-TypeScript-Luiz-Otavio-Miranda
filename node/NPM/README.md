# NPM

NPM é o gerenciador de pacotes do node

## Inicializando

Usamos o comando `npm init` ou `npm init -y` (versão curta);

Esse comando basicamente irá criar o arquivo package.json. 

## package.json

Esse arquivo conterá todas as informações do projeto, inclusive suas dependências.
Ele é criado quando usamos o comando `npm init`

```json
{
  "name": "npm", // Nome do projeto
  "version": "1.0.0", // Versão do projeto
  "description": "NPM é o gerenciador de pacotes do node", // Descrição do projeto
  "main": "index.js", // Arquivo de entrada do projeto
  "scripts": // Script ou linhas de comando use o run para executar ( npm run test )
  {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "", // Autor do projeto
  "license": "ISC" // Licensas
}
```

## Instalando pacotes de terceiros

instalaremos o express para testar uma instalação de pacote de terceiros.

Usamos o seguinte comando para instalar um pacote `npm instal packageName`.
Um uso real seria `npm install express`

Ao executar esse comando, será criado a pasta nome_modules ou adicionado a ela,
o pacote express e todas suas dependencias. O seu arquivo package.json terá a chave dependences
criada ou alterada, agora terá uma propriedade `express`, equivalente ao pacote que você instalou
em seu projeto.

### Updade

O comando `npm update` serve para atualizar todos os seus pacotes

O NPM install sempre irá instalar a ultima versão do pacote.

## Dev dependencies

Existem 2 seções de dependencias:

- dependencies
- devDependencies

As dependencies são as dependencias do projeto real, as dependencias de produção.
Já as devDependencies são aquelas dependencias que são necessárias apenas no ambiente de 
desenvolvimento. Não seão mais necessarias quando o projeto estiver concluído. Webpack e babel
são exemplos de devDependencies.

### Movedo uma dependencia para devDependencies

Use o comando `npm install express --save-dev`. Esse comando irá mover o express
para a seção de dependencias de desenvolvimento.

### Movedo uma devDependencia para dependencies

Use o comando `npm install express --save-prod`. Esse comando irá mover o express
para a seção de dependencias de produção.

### Instalando versão específica de um package

Use o comando `npm instal express@2.1.0`. Esse comando irá instalar a versão 2.1.0 do express.

### Versionamentos

Existe uma sequencia logica para a numeração das atualizações.

2.1.0 -> (major) . (minor) . (path)

- path: Correção de bugs
- minor: Novo recurso que não quebre a compatibilidade
- major: Compatibilidade com versões anteriores foi quebrada

Em muitos casos as versões das dependencias ficam com `^` na frente de sua
versão (^2.1.0), isso significa que quando usado o comando `npm update`, tanto a minor
quando a path, serão atualizadas, mas não a major.

Em alguns caso também é usado o `~` na frente das versões, é usado para indicar que apenas
o path será atualizado e não o major nem o minor.

## Desistalando um pacote

Use o comando `npm uninstall express` para desinstalar um pacote

## Verificando pacotes instalados

Use o comando `npm ls --depth=0`. Onde 0 é a profundidade das sub dependencias

## Verificando pacotes desatualizados

Use o comando `npm outdated`
