# Tabela
Tabela com HTML e CSS e JavaScript.

**Descrição Geral:**

O código representa uma página HTML que exibe uma tabela de produtos, preenchida dinamicamente por meio de um script JavaScript. O design da página é estilizado usando um arquivo CSS. Os dados dos produtos são definidos no script JavaScript, e a tabela é gerada dinamicamente no carregamento da página.

**HTML (`index.html`):**

- **Meta Tags:**
  - Define o conjunto de caracteres e configura a escala inicial da página.
  - Inclui um ícone para a página.

- **Scripts e Estilos:**
  - Importa o script JavaScript (`index.js`) para manipular dinamicamente a tabela.
  - Inclui um arquivo de estilo CSS (`style.css`) para estilizar a página.

- **Título e Corpo:**
  - Apresenta o título "Tabela de Produtos".
  - Inclui uma tabela (`#productTable`) com cabeçalho e corpo vazios.

**JavaScript (`index.js`):**

- **Evento `DOMContentLoaded`:**
  - Aguarda o carregamento completo do DOM antes de executar o script.

- **Arrays de Dados:**
  - `names`, `prices`, e `descriptions` armazenam dados fictícios correspondentes aos produtos.

- **Preenchimento Dinâmico da Tabela:**
  - Utiliza um loop para percorrer os dados e preencher as células da tabela dinamicamente.

**CSS (`style.css`):**

- **Estilo Global:**
  - Define a fonte global como Arial e configura a cor de fundo da página.

- **Estilo do Título (`h1`):**
  - Centraliza o texto.

- **Estilo da Tabela (`#productTable`):**
  - Estabelece largura, margem e efeitos de sombra.
  - Configura o espaçamento interno das células e estilos de borda.

- **Estilo das Células (`#productTable th, #productTable td`):**
  - Define preenchimento, alinhamento de texto e estilos de borda.

- **Estilo do Cabeçalho (`#productTable th`):**
  - Especifica cores de fundo e texto.

- **Efeito de Destaque (`#productTable tbody tr:hover`):**
  - Muda a cor de fundo das linhas ao passar o mouse.


