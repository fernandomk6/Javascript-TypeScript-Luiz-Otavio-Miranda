# Mas que diabos é o loop de eventos? 

## Referências

[Mas que diabos é o loop de eventos? | Philip Roberts | JSConf EU](https://youtu.be/8aGhZQkoFbQ)

[Loupe - Visualize call stack, event loop, callback queue e mais](http://latentflip.com/loupe/)

## Introdução

Os programadores JavaScript gostam de usar palavras como event-loop, "non-blocking", 
"callback", "assíncrono", "single-threaded" e "concurrency" (simultaniedade).

Dizemos coisas como "não bloqueie o loop de eventos", "verifique se o código é executado 
a 60 quadros por segundo", "é claro que não funcionará, essa função é um retorno de 
chamada assíncrono!"

Se você é como eu, assente e concorda, como se tudo fosse óbvio, mesmo que você não 
saiba o que as palavras significam; e, no entanto, encontrar boas explicações sobre 
como o JavaScript realmente funciona não é tão fácil, então vamos aprender!

## Conceitos chaves

- Event loop (Loop de eventos) 
- Call stack (pilha de chamadas)
- Callback queue (fila de callbacks)
- WEB APIs (APIs da WEB)

## Web APIs

Coisas como DOM, Timeout entre outras, não estão presentes na engine javascript.
As WEB APIs são fornecidas pelo host, (Browser, nodeJS etc) e usadas pela engine javascript.

Todas as APIs da WEB retornam callbacks, esses callbacks são adicionados na callback queue.
Todas as APIs tem esse comportamento (AJAX, fetch, timeout e etc).

## Javascript runtime

Essa é uma versão simplificada de o que é Javascript runtime

![Javascript runtime](https://aseemrb.me/images/weird-awesome-javascript/chrome.png)

### Call stack

- Uma thread
- Uma call stack
- Uma coisa de cada vez

Javascript é uma linguagem de programação single tread, tem uma única pilha de chamadas e 
isso pode fazer uma coisa de cada vez.

Call stack é uma estrutura de dados que registra em qual local do código estamos.

Se chamamos uma função. Ela é adicionada ao topo da call stack.
Se saímos da função. Ela é removida da call stack.

A stack inicia possuindo apenas uma função a ser executada, que é o bloco global de seu
arquivo javascript. Depois vai adicionando e removendo funções da filha, seguindo a ordem
em que foram declaradas no arquivo. De cima para baixo de forma síncrona.

#### Stack trace

Local onde o código se encontra no momento na call stack. Uma forma de rastrear, mapear, a call stack.
É muito comum vermos stack trace quando um erro é lançado. A mensagem de erro mostra o "caminho percorrido"
até o erro ser lançado. Como já mensionado, esse caminho é uma visualização da call stack no momento que o erro
foi lançado.

#### Blocking

O que acontece quando as coisas estão lentas?

Blocking são "coisas lentas". Um código que demora muito para ser executado é um blocking.
Está bloqueando os outros processos de serem executados. Pois como já vimos, a call stack
faz uma coisa de cada vez.

Isso é um problema, pois, algumas operações como requests, podem demorar bastante, e o 
codigo subsequente apenas será executado após a conclusão desse request. E ninguém gosta 
de ficar esperando. É esse o problema com operações bloqueantes.

A solução mais simples que temos para isso é **callbacks assíncronos**.

### Callback assíncronos

São funções que serão chamadas quando o seu codigo estiver pronto para ser executado.
Quando os callbacks assíncronos estiverem prontos, eles são adicionados a callback queue.
É ai que entra o trabalho do Event loop. O Event loop é responsável por pegar o callback
que está no topo da pilha do callback queueu e empurrar ele para a call stack.

Ou sejá basicamentes temos duas frentes de execução de codigo

#### Call stack

É a fila principal e unica da enigine javascript. Onde todos os codigos são executados.

#### Callback queue 

É a fila "secundaria" é aonde são empilhados os callbacks assíncronos quando estão prontos.
Qualquer WEB API envia seus callbacks para a Callback Queue quando concluidos.

#### Event loop

O Event loop checa constantemente se tem algo na callback queue, e quando tem, ele pega esse
callback e empurra ele para o topo da call stack, onde esse callback é executado.

O event loop so empurra o callback para a call stack, quando a callstack está vazia.
Ele espera a call stack ser concluída, para poder ir executando em sequencia os callbacks
que estão empilhados na callback queue.

### Event loop e concurrency (simultaniedade)

Uma coisa por vez... Não exatamente

Como explicado acima, algumas WEB APIs não são executadas imediatamente na call stack, elas são
processadas em WEB APIs, quando prontas, o seu callback é empurrado para a callback queue e fica lá
até a call stack esvaziar. Quando a call stack estiver vazia, o event loop pega esse callback,
e empurra-o para a call stack, onde esse callback finalmente é executado. Isso é simultaniedade.
E pode ser chamado de código assíncrono.

## Render navegador

O navegador executa um 'codigo', de renderização a aproximadamente 16 millesegundos, que
é equivalente a 60 FPS. Esse codigo é responsavel por rederizar a parte grafica do navegador.
O render so é executado quando a call stack está vazia, ou seja, a call stack pode travar a 
renderização da tela.

Funciona como um callback que está na callback queue. Precisa esperar a call stack esta
vazia, para poder ser executado.

O render tem prioridade ao seu callback que está na callback queue. Ou seja, se um render
e um callback estiverem para serem executados, o render será executado primeiro.
