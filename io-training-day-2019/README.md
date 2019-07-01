io-training-day-2019

@author:
kor.rodrigues
rodrigo.wladyka

Treinamento VTEX-IO 2019

#Fundamentos

Store components, são componentes basicos, open source, feitos pela vtex. tem prateleiras carroussel etc.
A vtex quer que o lojista consiga criar da maneira que quiser, como um lego, sem necessidade de conhecer código

VTEX.io/store-features - lista de componentes
VTEX.io/faq - perguntas comuns relacionadas ao desenvolvimento

# O que posso fazer com o IO

Nunca deixaram claro quais são as bordas do IO
Existem diversos niveis de clientes, cada um com suas permissões

Hoje é possivel criar loja no IO usando os componentes out-of-the-box da vtex

Contribuir na construção e manutenção dos componentes vtex, abrir issues, pr etc

Estender os componentes para criar features especificas.*
*: somente caso a VTEX não atenda, e não pretende atender esse componente
*: Nem toda loja pode estender componente e nem todos componentes podem ser extendidos
Enterprise, o lojista tem que ter uma boa justificativa e garanta que sabe o que está fazendo, tendo o orçamento, o lojista será um cliente enterprise e terá permissões a mais na construção da loja
Não importa as permissões da agencia, o lojista tem que ter essa permissão.

Existem componentes public, que são componentes que podem ser extendidos livremente e não é necessario que o lojista seja enterprise

# Store-theme

A expressão da marca através de componentes

storetheme.vtex.com

vai ser commitado um novo store-theme que é mais extensivel e customizavel (29/04/2019)

# store-builder

Define como os componentes serão disponibilizados na loja, onde tem configurações, ordem, customizações etc

-> Interface é o contrato que um bloco pode ser adicionado numa página ou não
existem os blocos allowed e required
allowed é os componentes que são permitidos, required são os que são obrigatórios

// TODO ADD EXEMPLO

// TODO add exemplo de blocos sendo inseridos

github.com/vtex-apps
- bloco search result
-- pasta store
--- interfaces.json
---- configuração do componente
---- mostra os exemplos acima
--- blocks.json
---- blocos adicionados no componente

intefaces dizem os componentes que deve colocar e os que pode colocar

blocos é onde voce coloca esses componentes

# Composition

permite que seja desenhado de acordo com a necessidade do cliente
ex: header

----- OBS: header-spacer é um componente que não deveria existir -\_(-_-')_/- serve somente para criar uma <div> com flex-grow

existem props na header como stick: true, que é para deixar a linha fixa no scroll, bem top

# alguns conceitos nos blocos/interfaces

Before e after

a interface base de todas as lojas é a "store" e ela tem as props before e after

no before descreve o header ou tudo o que aparecerá antes do conteudo
no after descreve o footer ou tudo o que aparecerá após o conteudo

toda página tem uma 'casca' e o conteudo é modificado e não pode ser reordenado no WYSIWYG

before e after são coisas que terão em todas as página
porém é possivel adicionar before e after especificos a páginas que estenderem a "store"
exemplo: inserir uma header especifica para a home ou adicionar um footer customizado em uma LP

Existe a arround que é o que ficará a meiuca com os componentes

# blocos

é possivel adicioanr dois blocos iguais, adicionando uma hash (#) diferente após o nome do componente

ex:

rich-text#question
rich-text#link

será considerado dois componentes diferentes

você pode adicionar uma classe a um componente usando a props blockClass

# children

Permite adicionar componentes dentro de outros components, basicamente define a sua implementação do bloco a partir do contrato feito no interfaces.json (??????)

# parent

Passa uma props para um componente pai (????)




***** Documentações estarão nos readmes dos apps, se estiver desatualizado envie uma issue


# Style builder

Builder que define o estilo CSS utilizado pela loja.

# style.json

sobreescreve o Tachyons da vtex, mudando cores, fontes, etc

# CSS Overrides

!use with caution

Voce cria um arquivo css para cada bloco na loja

o nome do arquivo css é o nome do componente

é 1 arquivo css para cada bloco


# WYSIWYG

Haverá permissões e restrições de acordo com nivel de admnistrador

Poderá alterar: Layout, cores, props de componentes etc, alterar ordem e alterar conteudo etc
Cada um com seu nivel de usuário




# Getting started

npm i -g vtex

vtex init

 > store theme

(temp: git clone https://github.com/vtex-apps/store-theme.git && git checkout feature/new-layout para pegar a versão mais recente 29/04/2019)

cd store-theme (ou nome da sua pasta)

vtex login

vtex workspace create {{seu nome}}

vtex link

* A partir daqui sua app está linkada em seu workspace

ps: vtex uninstall vtex.store-theme caso veja versão antiga

faça alterações no blocks.json e veja como a loja muda!


flag para ver loja sem alterações do usuário: ?disableUserLand


existe um componente de linha! para colocar, por exemplo, um texto ao lado de uma vitrine **TOP**
flex-layout.row
flex-layout.col

:O


ver como montar menus, pq é loucura mas é legal



# REACT

É possivel estar linkado com varias apps ao mesmo tempo, e uma extendendo a outra



LOJAS BASICAS PODEM SEGUIR O DESENVOLVIMENTO NORMALMENTE

LOJAS COMPLEXAS OU QUE SAIAM DOS COMPONENTES VTEX DEVEM PASSAR PELO COMERCIAL DA VTEX