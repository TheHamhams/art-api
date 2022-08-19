let art_url = 'https://api.artic.edu/api/v1/artworks'



async function mouseEvent(id, image_id) {
    let request = new Request(art_url+image_id, {
        method: 'GET'
    })

    let result = await fetch(request)
    let response = await result.json()

    document.getElementById(id).innerHTML = `<h3>Title:</h3><p>${response.data.title}</p>
    <h3>Artist:</h3> <p>${response.data.artist_display}</p>
    <h3>Medium:</h3><p>${response.data.classification_title}</p>
    <h3>Place of Origin:</h3><p>${response.data.place_of_origin}</p>`
    document.getElementById
    console.log(response)
}

async function clearEvent(id) {
    document.getElementById(id).innerHTML = ''
}