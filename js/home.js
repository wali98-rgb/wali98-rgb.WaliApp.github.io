// button pop up
function popUlas() {
    var popUp = `
                    <div class="ulasan" id="ulasFilm" name="ulasFilm">
                        <form action="#" name="ulas">
                            <label for="">Nama Film : </label> <br>
                            <input type="text" name="namaFilm" id=""> <br>
                            <label for="">Ulasan : </label> <br>
                            <input type="radio" name="ul" id="ulas1"><label for="ulas1">1</label>
                            <input type="radio" name="ul" id="ulas2"><label for="ulas2">2</label>
                            <input type="radio" name="ul" id="ulas3"><label for="ulas3">3</label>
                            <input type="radio" name="ul" id="ulas4"><label for="ulas4">4</label>
                            <input type="radio" name="ul" id="ulas5"><label for="ulas5">5</label> <br>

                            <input type="button" onclick="tambahUlas()" name="inputUlasan" id="" value="ULAS">
                        </form>
                    </div>
    `

    // var ada = document.getElementById("ulasFilm") = 

    document.getElementById("wUlas").innerHTML = popUp
}

function tambahUlas() {
    var nf = document.ulas.namaFilm.value
    var uf = document.ulas.ul.value
    var rt = document.ulas.rate.value
    var hasil

    if (rt == 1) {
        hasil = "Membosankan"
    } else if (rt == 2) {
        hasil = "Kurang Seru"
    } else if (rt == 3) {
        hasil = "Lumayan"
    } else if (rt == 4) {
        hasil = "Seru"
    } else if (rt == 5) {
        hasil = "Memuaskan"
    } else if (rt == null || rt == "") {
        hasil = "Anda Belum Mengisi Rate..."
    } else {
        hasil = "Pilih Rate Sesuai dengan Rate yang Tertera..."
    }
    
    document.getElementById('namaPilem').innerHTML = nf
    document.getElementById('ulasanPilem').innerHTML = uf
    document.getElementById('ratePilem').innerHTML = hasil
}