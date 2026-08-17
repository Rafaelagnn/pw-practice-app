Teste de UI do Playwright com TypeScript - Anotações das videoaulas

---> Configuração do Ambiente

1. Baixe e instale o Node.js (LTS)

Verifique se você já o tem instalado em sua máquina, executando os seguintes comandos no terminal: `node -v` e `npm -v`

O Node.js é um ambiente virtual que permite executar JavaScript fora do navegador (no seu computador). Isso acontece porque o JavaScript foi criado para ser executado no navegador. Com ele, podemos usar comandos como o `npm`.

2. Baixe e instale uma IDE. Neste curso, usaremos o Visual Studio Code.

3. Git

Verifique se você já o tem instalado em sua máquina, executando os seguintes comandos no terminal: `git -v`

*

---> Clone o aplicativo que usaremos neste curso:

Passo 1: Clone o Aplicativo

Faça um fork do projeto e clone seu próprio repositório para o seu espaço de trabalho.

Passo 2: Instale as Dependências

npm install --force

Passo 3: Execute o Aplicativo

npm start

Para acessar: localhost:4200

  *

---> Instalação do Playwright - Documentação: https://playwright.dev/docs/intro

1. Acesse a pasta onde deseja instalar o Playwright.
2. Execute o seguinte comando no terminal: `npm init playwright@latest`
3. Finalize a instalação escolhendo as opções desejadas.

Visão geral da estrutura de pastas

Após a instalação, a seguinte estrutura de pastas será criada:

a. `node-modules`: Contém bibliotecas e componentes, incluindo o framework Playwright.

Caso precise excluir esta pasta, ao executar `npm install`, ela será recriada automaticamente.

b. `test`: Contém arquivos de teste, com o arquivo `example.spec.ts` como exemplo.

c. `gitignore`: Exclui determinadas pastas do repositório Git ao executar comandos de commit e push.

d. `package.json`: Descreve o projeto e suas dependências [como scripts npm e dependências de desenvolvimento].

e. package-lock.json: Pode ser excluído sem problemas; ao executar [npm install], este arquivo será gerado automaticamente novamente.

e. Playwright.config.ts: Arquivo de configuração principal para as definições do Playwright.



*

---> Executar com a linha de comando

Executando Testes

a. Para executar todos os casos de teste no modo headless por padrão (todos os projetos/navegadores)

npx playwright test

b. Para executar os testes no modo com interface gráfica (navegador visível) (adicione --headed) (todos os projetos/navegadores)

npx playwright test --headed

c. Para visualizar o relatório após a execução dos testes

npx playwright show-report

Executando Testes em Navegadores Específicos (projeto)

d. Para executar testes em um navegador específico, especifique o projeto

npx playwright test --project=Chromium

Executando Arquivos de Teste Específicos

e. Para executar um arquivo de teste específico e com um navegador específico (projeto)

npx playwright test example.spec.ts

npx playwright test example.spec.ts --project=Chromium

f. Para executar um teste específico pelo nome (todos os projetos/navegadores):

npx playwright test -g "tem título"

Para pular alguns testes, podemos usar `.skip` na função de teste para ignorá-los durante a execução:

test.skip('', async ({page}) => {})

Para executar apenas um teste de condição (TC) em um arquivo, podemos usar `.only`:

test.only('', async ({page}) => {})

Executando no modo de interface gráfica:

npx playwright test --ui

Opções de depuração

a. Para executar testes com rastreamento, use o comando. Dessa forma, após a execução, consulte o arquivo de relatório gerado e você poderá ver o rastreamento.

npx playwright test --trace on

b. Para depurar, execute o comando e o Playwright abrirá uma nova janela para visualizar o código a ser depurado:

npx playwright test --debug

c. Coloque um ponto de interrupção no lado esquerdo do código e execute usando a opção de depuração no plugin Playwright do VS Code.

*

---> Terminologia HTML

um. Tag HTML: Começa e termina com chaves angulares <> (ex.: <input>).

b. Atributos HTML: Características das tags HTML, que podem ou não ter valores (ex.: placeholder="email").

c. Elementos Pai e Filho: Os elementos acima são elementos pai, enquanto os abaixo são elementos filho. Elementos irmãos estão no mesmo nível.
*


---> Regras de sintaxe do localizador:

um. Por nome da tag: use o nome da tag como uma string. Por exemplo, page.locator('entrada').

b. Por ID: prefixe o ID com um sinal de cerquilha. Exemplo: page.locator('#input-email1').

c. Por classe: prefixe a classe com um ponto. Exemplo: page.locator('.shape-rectangle').

d. Por Atributo: Use colchetes. Exemplo: page.locator('[placeholder="email"]').

e. Combinando Seletores: Combine a tag e o atributo sem espaços. Exemplo: `page.locator('input[placeholder="email"]')`.

f. XPath: Embora possível, não é recomendado. Exemplo: `page.locator('//input[@id="input-email1"]')`.

g. Correspondência de Texto: Use `page.locator({ text: 'texto parcial' })` para correspondências parciais e `page.locator({ text: 'texto exato' })` para correspondências exatas.

*

---> Melhores Práticas para Localizadores

Use os seguintes métodos para criar localizadores visíveis ao usuário:

a. `getByRole`: Identifica elementos por sua função. Exemplo: `await page.getByRole('textbox', { name: 'email' })`.

b. `getByLabel`: Encontra elementos pelo rótulo associado. Exemplo: `await page.getByLabel('email').click()`.

c. getByPlaceholder: Localiza elementos pelo texto de espaço reservado. Exemplo: await page.getByPlaceholder('Jane Doe').click().

d. getByText: Usa o texto estático exibido na página da web. Exemplo: await page.getByText('Usando a grade').click().

e. getByTitle: Encontra elementos pelo atributo title. Exemplo: await page.getByTitle('Painel de controle IoT').click().

f. getByTestId: Usa IDs de teste personalizados definidos no código-fonte. Exemplo: await page.getByTestId('sign-in').click().

*
---> Faker

https://fakerjs.dev/guide/