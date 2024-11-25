const autor = {
    id: 'j-k-rowling',
    nome: 'J. K. Rowling',
    idade: 65,
    imagem: " ",
    biografia: "...",
}

console.log(autor.id);


let livro = {
    id: 'harry-potter-pedra',
    nome: "Harry Potter",
    autor: autor,
    ano: 1997,
    ordem: 1,
    imagem: '',
}

console.log(livro.nome);
console.log(livro.autor.nome);