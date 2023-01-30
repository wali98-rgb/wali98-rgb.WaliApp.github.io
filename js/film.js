// search film
var films = [
    ["../../img/aquaman.jpg", "Aquaman", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Aquaman adalah pahlawan <br> super dalam buku komik...", "../kontent/konten.html", "Go"],
    ["../../img/ava1.jpeg", "Avatar", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avatar, dikenal sebagai James <br> Cameron's Avatar, adalah...", "../kontent/ava1.html", "Go"],
    ["../../img/ava.jpg", "Avatar 2", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avatar: The Way of Water <br> adalah film fiksi ilmiah...", "../kontent/avatar.html", "Go"],
    ["../../img/aven-inf.jpeg", "Avengers: Infinity War", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avengers: Infinity War adalah <br> film pahlawan super Amerika...", "../kontent/avenger_infinity.html", "Go"],
    ["../../img/aven-end.jpg", "Avengers: Endgame", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avengers: Endgame adalah <br> film pahlawan super Amerika...", "../kontent/avenger_endGame.html", "Go"],
    ["../../img/black.jpeg", "Black Panther", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Black Panther adalah film superhero <br> Amerika Serikat tahun 2018...", "../kontent/black.html", "Go"],
    ["../../img/bpwf.jpg", "Black Panther: Wakanda Forever", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Black Panther adalah <br> film superhero Amerika...", "../kontent/bPanther.html", "Go"],
    ["../../img/des1.jpeg", "Despicable Me", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Despicable Me adalah film <br> komedi animasi komputer 3D...", "../kontent/despicable1.html", "Go"],
    ["../../img/des.jpg", "Despicable Me 2", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Despicable Me 2 adalah <br> film komedi animasi komputer...", "../kontent/despicable.html", "Go"],
    ["../../img/minions.jpg", "Minions", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Minions adalah film komedi <br> animasi komputer Amerika...", "../kontent/minions.html", "Go"],
    ["../../img/start.jpg", "Start-Up", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Start-Up (Hangul: 스타트업; <br> RR: Seutateueob) adalah...", "../kontent/start.html", "Go"],
    ["../../img/socialN.jpg", "The Social Network", "&#9733;&#9733;&#9733;&#9733;&#9734;", "The Social Network <br> adalah sebuah film drama biografi...", "../kontent/social.html", "Go"],
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
                        <a href="${filmSaatIni[4]}" class="btn">${filmSaatIni[5]}</a>
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