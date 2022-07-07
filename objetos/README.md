# Objetos

## Descriptors

Todo objeto possui chave, valor e um descritor (Descriptor)

- Por convenção, atributos de propriedades são referidos com uma notação 
utilizando dois colchetes. Por exemplo, `[[Enumerable]]`.

Existem seis atributos de propriedades, mas eles se agrupam de acordo com a função 
da propriedade do objeto.

Atributos específicos de propriedades de dados:

- `[[Value]]`, que contém o valor da propriedade. Seu valor padrão é undefined.
- `[[Writable]]`, um booleano que define se o valor da propriedade (`[[Value]]`) pode ser alterado. Seu valor padrão é false.

Atributos específicos de propriedades assessoras (getters ou setters):

- `[[Get]]`, que contém a função getter, invocada quando a propriedade é lida. Seu valor padrão é undefined.
- `[[Set]]`, que contém a função setter, invocada quando a propriedade é definida ou redefinida. Seu valor padrão é undefined.

Atributos gerais (tanto de propriedades de dados quanto de propriedades assessoras):

- `[[Enumerable]]`, um booleano que determina se a propriedade é enumerável. Seu valor padrão é false.
- `[[Configurable]]`, um booleano que determina se a propriedade é configurável. Seu valor padrão é truec.

### Metodos

- Object.defineProperty(define propriedade): Recebe como parametros um objeto e uma chave,
essa chave será criada nesse opjeto, e como terceiro parametro, um objeto, que irá setar
algumas configurações para essa propriedade, como writable, value, enumerable e configurable
- Object.defineProperties(definir propriedades): Igual ao primeiro exemplo, porem recebe apenas
dois parametros, o objeto que as propriedades serão definidas, e um objeto com as configurações
para cada propriedade desse objeto
- Object.keys(chaves): Recebe um objeto como parametro e retorna todas as chves desse objeto
em um array
- Object.freeze(congele): Impede que novas propriedades sejam adicionadas. impede que 
as propriedades existentes sejam removidas e impede que propriedades existentes, ou sua 
inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. 
O método retorna o objeto congelado.
- Object.isFrozen(Está congelado?): Verifica se o objeto passado como argumento esta congelado
- Object.assign(atribuir): O método Object.assign() é usado para copiar os valores de todas 
as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. 
Este método irá retornar o objeto destino.
-Object.getOwnPropertyDescriptor(obter descrição das proprias propriedades): retorna um 
descritor de propriedades para uma propriedade.
- Object.values(valores): Retorna um array com os valores das propriedades de um dado objeto 
na mesma ordem provida pelo for...in laço (sendo a diferença que o laço for-in também 
enumera as propriedades na cadeia prototype).
- Object.entries(entradas): Retorna um array cujos elementos são também arrays 
correspondentes aos pares de propriedades [key, value] enumeráveis encontrados 
diretamente sobre o objeto. A ordem das propriedades é a mesma que seria se fossem 
iteradas as propriedades do objeto manualmente.
- Object.setPrototypeOf(defina o `[[prototype]] ou __proto__` de): Define o protótipo (ou seja, a
`[[Prototype]]` propriedade interna) de um objeto especificado para outro objeto ou null.
- Object.getPrototypeOf(obtenha o `[[prototype]] de`): Retorna o protótipo (ou seja, o valor da 
`[[Prototype]]` propriedade interna) do objeto especificado.
- Object.create(criar): Cria um novo objeto, usando um objeto existente como protótipo 
do objeto recém-criado.
- Function.prototype.call(chama): O método call() invoca uma função com um dado valor this 
e argumentos passados individualmente. Você pode atribuir um objeto this diferente quando 
executar uma função existente. this refere-se ao objeto atual, o objeto em execução. 
Com call, você pode escrever um método uma vez e então herdá-lo em outro objeto, sem 
ter que reescrever o método para o novo objeto. PArametros, this e argumentos
para o objeto;