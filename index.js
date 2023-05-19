const buttonElement = document.getElementById("searchButton")
const inputElement = document.getElementById("query")
const resultsElement = document.getElementById("results")


const url = "https://deezerdevs-deezer.p.rapidapi.com"
const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    headers: {
      'X-RapidAPI-Key': '0b8a0ffcfamsh65474a4bb893354p1a26f4jsn8577d3ffed44',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
}

buttonElement.addEventListener("click", async () => {
    const { value } = inputElement
    const response = await fetch(`${url}/search?q=${value}`, options)
    const json = await response.json()
    const results = json.data.slice(0,6)
    console.log(results)

   resultsElement.innerHTML =  results.map((result) => {
    const {title, link} = result
    const {name} = result.artist
    const {cover_big} = result.album
    return `
    <div class="card">
            <img src = "${cover_big}" class ="songImage" alt = "Song image" />
            <div class="songInfo">
                <a href="${link}" target="blank" class="songTitle">${title}</a>
                <h4 class = "songArtist"> ${name}</h4>
            </div>
        </div>
    `
    }).join("");
});



