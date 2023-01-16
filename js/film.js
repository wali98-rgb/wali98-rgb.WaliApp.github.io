// search film
var films = [
    ["../../img/bpwf.jpg", "Black Panther: Wakanda Forever", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Black Panther adalah <br> film superhero Amerika...", "Go"],
    ["../../img/socialN.jpg", "The Social Network", "&#9733;&#9733;&#9733;&#9733;&#9734;", "The Social Network <br> adalah sebuah film drama biografi...", "Go"],
    ["../../img/aquaman.jpg", "Aquaman", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Aquaman adalah pahlawan <br> super dalam buku komik...", "Go"],
    ["../../img/des.jpg", "Despicable Me 2", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Despicable Me 2 adalah <br> film komedi animasi komputer...", "Go"],
    ["../../img/minions.jpg", "Minions", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Minions adalah film komedi <br> animasi komputer Amerika...", "Go"],
    ["../../img/ava.jpg", "Avatar 2", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avatar: The Way of Water <br> adalah film fiksi ilmiah...", "Go"],
    ["../../img/start.jpg", "Start-Up", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Start-Up (Hangul: 스타트업; <br> RR: Seutateueob) adalah...", "Go"],
    ["../../img/aven-end.jpg", "Avengers: Endgame", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avengers: Endgame adalah <br> film pahlawan super Amerika...", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "Go"],
]

var listFilms = document.getElementById('listFilm')

function printFilms(array) {
    var wadah = ""

    for (var i = 0; i < array.length; i++) {
        var filmSaatIni = array[i]
        wadah += `
                    <div class="card">
                        <img src="${filmSaatIni[0]}" class="img-gall" alt="" width="200px" height="300px">
                        <h1 class="judul">${filmSaatIni[1]}</h1>
                        <p class="isian">Rate: ${filmSaatIni[2]}</p>
                        <p class="isian">${filmSaatIni[3]}</p>
                        <hr color="black">
                        <a href="" class="btn">${filmSaatIni[4]}</a>
                    </div>`
    }

    listFilms.innerHTML = wadah
}

printFilms(films)

function filter(kata) {
    var filterFilm = []
    for (var j = 0; j < films.length; j++) {
        var film = films[j]
        var namaFilm = film[1]
        var isMatch = namaFilm.toLowerCase().includes(kata.toLowerCase())
        if (isMatch == true) {
            filterFilm.push(film)
        }
    }
    return filterFilm
}

var formSearch = document.getElementById("formFilm")
formSearch.addEventListener("submit", function (event) {
    event.preventDefault()
    var keyword = document.getElementById("keyword").value

    var terfilter = filter(keyword)
    printFilms(terfilter)
})

var inputSearch = document.getElementById("keyword")
inputSearch.addEventListener("keyup", function (event) {
    var value = event.target.value

    var filterDenganKeyup = filter(value)
    printFilms(filterDenganKeyup)
})