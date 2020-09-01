var nav = document.getElementById("navigasi");
var tab = nav.getElementsByClassName("menu");
for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if ((document.body.scrollTop >= 1890 && document.body.scrollTop <= 2100) || (document.documentElement.scrollTop >= 1890 && document.documentElement.scrollTop <= 2100)) {
        document.getElementById("menuHome").style.color = "rgb(106, 124, 148)"; ///////
        document.getElementById("menuHome").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ///////
        document.getElementById("menuFiture").style.color = "rgb(106, 124, 148)"; ////
        document.getElementById("menuFiture").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ///
        document.getElementById("menuWeare").style.color = "rgb(106, 124, 148)"; /////
        document.getElementById("menuWeare").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ////
        document.getElementById("menuContact").style.color = "#e84d91";
        document.getElementById("menuContact").style.borderBottom = "2px solid rgb(53, 88, 141)";
    } else if ((document.body.scrollTop >= 1260 && document.body.scrollTop <= 1830) || (document.documentElement.scrollTop >= 1260 && document.documentElement.scrollTop <= 1890)) {
        document.getElementById("menuHome").style.color = "rgb(106, 124, 148)"; ///////
        document.getElementById("menuHome").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ///////
        document.getElementById("menuFiture").style.color = "rgb(106, 124, 148)"; ////
        document.getElementById("menuFiture").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ///
        document.getElementById("menuWeare").style.color = "#e84d91";
        document.getElementById("menuWeare").style.borderBottom = "2px solid rgb(53, 88, 141)";
        document.getElementById("menuContact").style.color = "rgb(106, 124, 148)"; /////
        document.getElementById("menuContact").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ////
    } else if ((document.body.scrollTop >= 630 && document.body.scrollTop <= 1260) || (document.documentElement.scrollTop >= 630 && document.documentElement.scrollTop <= 1260)) {
        document.getElementById("menuHome").style.color = "rgb(106, 124, 148)"; ///////
        document.getElementById("menuHome").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ///////
        document.getElementById("menuFiture").style.color = "#e84d91";
        document.getElementById("menuFiture").style.borderBottom = "2px solid rgb(53, 88, 141)";
        document.getElementById("menuWeare").style.color = "rgb(106, 124, 148)"; /////
        document.getElementById("menuWeare").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ////
        document.getElementById("menuContact").style.color = "rgb(106, 124, 148)"; /////
        document.getElementById("menuContact").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ////

    } else if ((document.body.scrollTop > 0 && document.body.scrollTop <= 630) || (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <= 630)) {
        document.getElementById("menuHome").style.color = "#e84d91";
        document.getElementById("menuHome").style.borderBottom = "2px solid rgb(53, 88, 141)";
        document.getElementById("menuFiture").style.color = "rgb(106, 124, 148)"; ////
        document.getElementById("menuFiture").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ///
        document.getElementById("menuWeare").style.color = "rgb(106, 124, 148)"; /////
        document.getElementById("menuWeare").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ////
        document.getElementById("menuContact").style.color = "rgb(106, 124, 148)"; /////
        document.getElementById("menuContact").style.borderBottom = "2px solid rgba(53, 88, 141, 0)"; ////
    } else {

    }
}

function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var isiPesan = document.getElementById("isi-pesan").value;
    if (nama == "" && email == "" && subject == "" && isiPesan == "") {
        alert('Data belum di isi');
    } else if ((nama == "" && email == "" && subject != "" && isiPesan != "") || (nama != "" && email != "" && subject == "" && isiPesan == "") || (nama == "" && email != "" && subject == "" && isiPesan != "") || (nama != "" && email == "" && subject != "" && isiPesan == "") || (nama == "" && email != "" && subject != "" && isiPesan == "") || (nama != "" && email == "" && subject == "" && isiPesan != "") || (nama != "" && email == "" && subject == "" && isiPesan == "") || (nama == "" && email != "" && subject == "" && isiPesan == "") || (nama == "" && email == "" && subject != "" && isiPesan == "") || (nama == "" && email == "" && subject == "" && isiPesan != "")) {
        alert('Data tidak lengkap');
    } else if (nama == "" && email != "" && subject != "" && isiPesan != "") {
        alert('Nama belum di isi');
        SetFocusNama()
    } else if (nama != "" && email == "" && subject != "" && isiPesan != "") {
        alert('Email belum di isi');
        SetFocusEmail()
    } else if (nama != "" && email != "" && subject == "" && isiPesan != "") {
        alert('Subject belum di isi');
        SetFocusSubject()
    } else if (nama != "" && email != "" && subject != "" && isiPesan == "") {
        alert('Pesan belum di isi');
        SetFocusPesan()
    } else {
        validasiEmail()

    }
}

function eraseText() {
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("isi-pesan").value = "";
}

function validasiEmail() {
    var rs = document.getElementById('email').value;
    var atps = rs.indexOf("@");
    var dots = rs.lastIndexOf(".");
    if (atps < 1 || dots < atps + 2 || dots + 2 >= rs.length) {
        alert("Alamat email tidak valid.");
        SetFocusEmail()
        return false;
    } else {
        alert('Pesan Terkirim')
        eraseText()
    }
}

function SetFocusNama() {
    var input = document.getElementById("nama");
    input.focus();
}

function SetFocusEmail() {
    var input = document.getElementById("email");
    input.focus();
}

function SetFocusSubject() {
    var input = document.getElementById("subject");
    input.focus();
}

function SetFocusPesan() {
    var input = document.getElementById("isi-pesan");
    input.focus();
}