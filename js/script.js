let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function KiemTraNgaySinh() {
    var ns = new Date(document.getElementById('txtNS').value);
    var today = new Date();
    if (eval(today.getFullYear() - ns.getFullYear()) <= 18) {
        ngaysinh.innerText = ">18+";
        return false;
    } else {
        ngaysinh.innerText = "";
        return true;
    }
}

function KiemTraSoDienThoai() {
    var re = /^0\d{3}-\d{3}-\d{3}$/;
    if (re.test(document.getElementById('txtDT').value.trim()) == false) {
        tele.innerText = "* 0xxx-xxx-xxx  ";
        return false;
    } else {
        tele.innerText = " *";
        return true;
    }
}


function KiemTraDiaChi() {
    var re = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
    if (re.test(document.getElementById('txtDC').value.trim()) == false) {
        diachi.innerText = " address wrong!  ";
        return false;
    } else {
        diachi.innerText = " ";
        return true;
    }
}

function KiemTraEmail() {
    var re = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if (re.test(document.getElementById('txtEmail').value.trim()) == false) {
        email.innerText = "* Wrong email!";
        return false;
    } else {
        email.innerText = " *";
        return true;
    }

}

function KiemTraPassWord() {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (re.test(document.getElementById('txtMK').value.trim()) == false) {
        mk.innerText = "* Minimum six characters, at least one uppercase letter, one lowercase letter, and a number";
        return false;
    } else {
        mk.innerText = " *";
        return true;
    }

}

function KiemTraXacNhanPassWord() {
    if (document.getElementById('txtXNMK').value != document.getElementById('txtMK').value) {
        xnmk.innerText = " * Confirmation Password Does Not Match Registration Password";
        return false
    } else {
        xnmk.innerText = " *";
        return true;
    }
}