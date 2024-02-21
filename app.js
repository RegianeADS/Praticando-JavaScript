const monstros = [
    {
       id: 1,
       nome: 'Robôcat', 
       altura: 2,
       habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequuntur expedita. Fugiat ab, nihil perspiciatis dolorem minima, similique est hic excepturi maxime consequuntur commodi architecto quidem rerum expedita? Maiores, corporis.',
       foto: 'https://robohash.org/cat',
    },
    {
        id: 2,
       nome: 'Mega', 
       altura: 3,
       habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequuntur expedita. Fugiat ab, nihil perspiciatis dolorem minima, similique est hic excepturi maxime consequuntur commodi architecto quidem rerum expedita? Maiores, corporis.',
       foto: 'https://robohash.org/Mega'
    },
    {
        id: 3,
       nome: 'Tech', 
       altura: 7,
       habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequuntur expedita. Fugiat ab, nihil perspiciatis dolorem minima, similique est hic excepturi maxime consequuntur commodi architecto quidem rerum expedita? Maiores, corporis.',
       foto: 'https://robohash.org/Tech'
    },
    {
        id: 4,
       nome: 'Abe', 
       altura: 1.5,
       habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequuntur expedita. Fugiat ab, nihil perspiciatis dolorem minima, similique est hic excepturi maxime consequuntur commodi architecto quidem rerum expedita? Maiores, corporis.',
       foto: 'https://robohash.org/Abe'
    }
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMontros = monstros.map( monstro => {
    return `<div>
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}">
        <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsMontros