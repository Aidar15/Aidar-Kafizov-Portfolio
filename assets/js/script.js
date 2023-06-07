// Меню бургер

const iconMenu = document.querySelector('.main-header__burger');
const menuBody = document.querySelector('.main-header__menu');

if(iconMenu) {
    
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//Navigation

let navbar = document.querySelector('.main-header');
    var scrollPrev = window.pageYOffset;
    window.onscroll = function() {
    var scrollCur = window.pageYOffset;
    if(scrollPrev > scrollCur) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }
    scrollPrev = scrollCur;
}

//Send email 

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aidar.test@mail.ru",
        Password : "Fqlfhbr783",
        To : 'elvira_kafizova@mail.ru',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

