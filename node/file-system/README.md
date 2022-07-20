# File Systema

O módulo do sistema de arquivos Node.js permite trabalhar com o sistema de arquivos em seu computador.

Para incluir o módulo File System, use o `require()` método:

`var fs = require('fs');`

Uso comum para o módulo File System:

- Ler arquivos:
- Criar arquivos
- Atualizar arquivos
- Deletar arquivos
- Renomear arquivos

## Ler arquivos

O fs.readFile() método é usado para ler arquivos em seu computador.

## Criar arquivos

O módulo File System possui métodos para criar novos arquivos:

- fs.appendFile()
- fs.open()
- fs.writeFile()

O fs.appendFile() método anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado:

## Atualizar arquivos

O módulo File System possui métodos para atualizar arquivos:

- fs.appendFile()
- fs.writeFile()

O fs.appendFile() método anexa o conteúdo especificado no final do arquivo especificado:

## Deletar um arquivo

Para excluir um arquivo com o módulo File System, use o fs.unlink() método.

O fs.unlink() método exclui o arquivo especificado:

## Renomear arquivos

Para renomear um arquivo com o módulo File System, use o fs.rename() método.

O fs.rename() método renomeia o arquivo especificado: