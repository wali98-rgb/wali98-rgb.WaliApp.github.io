// list film
var films = [
    ["../../img/aquaman.jpg", "Aquaman", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Aquaman adalah pahlawan <br> super dalam buku komik...", "3", "Go"],
    ["../../img/ava.jpg", "Avatar 2", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avatar: The Way of Water <br> adalah film fiksi ilmiah...", "6", "Go"],
    ["../../img/aven-end.jpg", "Avengers: Endgame", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Avengers: Endgame adalah <br> film pahlawan super Amerika...", "8", "Go"],
    ["../../img/bpwf.jpg", "Black Panther: Wakanda Forever", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Black Panther adalah <br> film superhero Amerika...", "1", "Go"],
    ["../../img/des.jpg", "Despicable Me 2", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Despicable Me 2 adalah <br> film komedi animasi komputer...", "4", "Go"],
    ["../../img/minions.jpg", "Minions", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Minions adalah film komedi <br> animasi komputer Amerika...", "5", "Go"],
    ["../../img/start.jpg", "Start-Up", "&#9733;&#9733;&#9733;&#9733;&#9734;", "Start-Up (Hangul: 스타트업; <br> RR: Seutateueob) adalah...", "7", "Go"],
    ["../../img/socialN.jpg", "The Social Network", "&#9733;&#9733;&#9733;&#9733;&#9734;", "The Social Network <br> adalah sebuah film drama biografi...", "2", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "9", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "10", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "11", "Go"],
    ["../../img/", "", "&#9733;&#9733;&#9733;&#9733;&#9734;", "", "12", "Go"],
]

var listFilms = document.getElementById('cont-isi')

function printFilms(array) {
    var wadah = ""

    for (var i = 0; i < array.length; i++) {
        var filmSaatIni = array[i]
        wadah += `
        <div class="jdl">FILM</div>
        <div class="main">
            <div class="gambar">
                <img src="${filmSaatIni[0]}" alt="gambar ni boss" width="300px">
            </div>
            <div class="desc">
                <h1>${filmSaatIni[1]}</h1>
                <p>${filmSaatIni[3]}</p>
                <div class="tombol">
                    <a href="">Nonton</a>
                    <a href="../main/film.html">Back</a>
                </div>
            </div>
        </div>`
    }

    listFilms.innerHTML = wadah
}

printFilms(films)