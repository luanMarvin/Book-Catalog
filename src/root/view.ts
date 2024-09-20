export const View = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Catalog</title>
</head>
<body>
    <main>
        <h1>Book Catalog</h1>
        <h2>Guia da API</h2>
        <h3>/books (GET)</h3>
        <p>Uma requisição GET resulta nos nomes dos livros já cadastrados, caso queira filtrar pelos nomes dos livros coloque: books?title=Nome+Do+Livro</p>
        <h3>/books (POST)</h3>
        <p>Uma requisição POST resulta na cadastro de novos livros, para realizar esse cadastro envie um objeto JSON ou um formulário com as informações a seguir: </p>
        <p>{"title": "Titulo do Livro",
        "author": "Autor do Livro",
        "year": 2000 }</p>
        <p>|| O nome do livro e do autor são strings, e o ano um inteiro.</p>
        <h3>/books (PUT)</h3>
        <p>Uma requisição PUT resulta na mudança de um arquivo já preescrito. Para permitir que livros com nomes iguais existam, cada um é diferenciado pelo ID</p>
        <p>{"id":1, "title": "Novo titulo", "author": "Novo Ano", "year": 2001 }</p>
        <p>Modifique acima as caracteristicas da mudança. É necessário obter primeiramente o ID do livro. Essa informação (ID) é publica para fins didáticos, e normalmente seria utilizado um código especifico por livro.</p>
        <p>É possível incluir apenas as informações que deseja mudar, porém o ID deve ser sempre informado no Form ou no JSON: {"id":5, "title": "Titulo Novo" }</p>
        <h3>/books (DELETE)</h3>
        <p>Uma requisição DELETE resulta na exclusão de registro de algum livro. é necessário informar apenas o ID do livro a ser excluido.</p>
    </main>
    <style>
        main {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    </style>
</body>
</html>`