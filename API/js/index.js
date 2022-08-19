
const main = document.querySelector('main')

async function getData(){
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const photos = await res.json()
    photos.results.forEach(p => {
        
        const card = document.createElement('div')
        card.className = card
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = p.image
        

        const name = document.createElement('h3')
        name.textContent = p.name


        card.append(img, name)
        main.append(card)
    });

}

getData()



