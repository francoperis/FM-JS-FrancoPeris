
const main = document.querySelector('main')

async function getData(){
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const photos = await res.json()
    photos.forEach(p => {
        const card = document.createElement('div')
        card.className = card

        const img = document.createElement('img')
        img.src = p.image

        const tittleName = document.createElement('h3') 
        tittleName.textContent = p.location.name

        card.append(img,tittleName)
        main.append(card)
    })



   
}


getData()


