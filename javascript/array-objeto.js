const autores = [
    {
        id: 'j-k-rowling',
        nome: 'J. K. Rowling',
        idade: 65,
    },
    {
        id: 'j-r-r-tolkien',
        nome: 'J. R. R. Tolkien',
        idade: 89,
    },
    {
        id: 'george-r-r-martin',
        nome: 'George R. R. Martin',
        idade: 73,
    },
];

console.log(autores[0].nome);
console.log(autores[1].nome);
console.log(autores[2].nome);
console.log(autores[3]?.nome);

console.log("Fim!");

const serieHarryPotter =
{
    id: 'harry-potter',
    titulo: 'Harry Potter',
    descricao: 'teexto disjdosadfopfjfgks´fkdasijaoskdóakspfdjafjhoisdhfjsdi',

    livros: [
        {
            id: 'harry-potter-e-a-pedra-filosofal',
            titulo: 'Harry Potter e a Pedra Filosofal',
            ano: 1997,
        },
        {
            id: 'harry-potter-e-a-camara-secreta',
            titulo: 'Harry Potter e a Carama Secreta',
            ano: 1998,
        },
        {
            id: 'harry-potter-e-o-prisioneiro-de-azkaban',
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            ano: 1999,
        },
    ],
};

console.log(serieHarryPotter.livros[0]?.titulo);