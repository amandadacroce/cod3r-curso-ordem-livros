import autores from "./dados/autores.js";

const series = [
    {
        id: 'harry-potter-pedra',
        nome: "Harry Potter",
        autor: autores[0],
        ano: 2001,
        ordem: 1,
        imagem: '',
        livros: [
            {
                id: 'harry-potter-e-a-pedra-filosofal',
                titulo: 'Harry Potter e a Pedra Filosofal',
                autor: autores[0],
                ano: 1997,
            },
            {
                id: 'cronicas-gelo-e-fogo',
                titulo: 'Cronicas Gelo e fogo',
                autor: autores[3],
                ano: 2000,
            },
            {
                id: 'harry-potter-e-a-pedra-filosofal',
                titulo: 'Harry Potter e a Pedra Filosofal',
                autor: autores[0],
                ano: 1997,
            },
        ],
    },
];


export default series;