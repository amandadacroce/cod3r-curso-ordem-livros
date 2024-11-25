import autores from "./autores";

const series = [
    {
        id: "harry-poter",
        titulo: "Harry Potter",
        descricao: "A série de livros Harry Potter, escrita por J.K. Rowling, é uma das mais bem-sucedidas e influentes da literatura mundial. Composta por sete volumes publicados entre 1997 e 2007, a saga acompanha a jornada de Harry Potter, um jovem órfão que descobre ser um bruxo e enfrenta desafios no mundo mágico, incluindo a luta contra o poderoso bruxo das trevas, Lord Voldemort.",
        autor: autores[0],
        ano: 1997,
        imagem: 'https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/2549/7ababc2015043445b750ebc853a5f706.jpg',
        livros: [
            {
                id: "harry-potter-e-a-pedra-filosofal",
                titulo: "Harry Potter e a Pedra Filosofal",
                autor: autores[0],
                ano: 1997,
                ordem: 1,
                imagem: "https://m.media-amazon.com/images/I/81pB+joKL4L._UF894,1000_QL80_.jpg",
                link: "https://www.amazon.com.br/Harry-Potter-Pedra-Filosofal-Série-ebook/dp/B01LQM96G4",
            },
            {
                id: "harry-potter-e-a-camara-secreta",
                titulo: "Harry Potter e a Câmara Secreta",
                autor: autores[0],
                ano: 1998,
                ordem: 2,
                imagem: "https://m.media-amazon.com/images/I/81D+5aMHzFL._UF894,1000_QL80_.jpg",
                link: "https://www.amazon.com.br/Harry-Potter-Câmara-Secreta-Série-ebook/dp/B01LQM96K0",
            },
        ]
    },
    {
        id: "cronicas-de-gelo-e-fogo",
        titulo: "Crônicas de Gelo e fogo",
        descricao: "A série As Crônicas de Gelo e Fogo, escrita por George R.R. Martin, é uma das mais aclamadas obras de fantasia épica contemporânea. Iniciada em 1996 com o lançamento de A Guerra dos Tronos (A Game of Thrones), a saga combina política, intriga, guerra e elementos sobrenaturais em um mundo complexo e realista.",
        autor: autores[1],
        ano: 1997,
        imagem: 'https://i.uai.com.br/ArxzDrGnhHpcpuXhe_UiTZ_IBsE=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/04/14/244430/20190412130531890607i.jpg',
    },
    {
        id: "senhor-dos-aneis",
        titulo: "Senhor dos Anéis",
        descricao: "A história segue a jornada de Frodo Bolseiro, um hobbit encarregado de destruir o Um Anel, um artefato mágico criado pelo Lorde das Trevas Sauron para dominar toda a Terra-média. Frodo é acompanhado por uma Sociedade composta por hobbits, humanos, um elfo, um anão e um mago, enfrentando desafios épicos e dilemas morais ao longo do caminho.",
        autor: autores[2],
        ano: 1954,
        imagem: 'https://aventurasnahistoria.com.br/media/_versions/2024/09/senhor-dos-aneis_widelg.jpg',
    },
];


export default series;