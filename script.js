AOS.init();

var menu = document.querySelector('.menu');
var bg = document.querySelector('.bg');

menu.addEventListener('click', function () {
    bg.classList.toggle('active');
    menu.classList.toggle('active');
})

var nav = document.querySelector('.nav');
window.addEventListener('scroll', function () {
    nav.classList.toggle('sticky', window.scrollY > 0);
})

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.fa');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function sendEmail() {
    Email.send({
        SecureToken: "xxx",
        To: 'maliksakshi248@gmail.com',
        From: document.getElementsByClassName("email")[0].textContent,
        Subject: "Website email",
        Body: document.getElementsByClassName("message")[0].textContent,
    }).then(
        message => alert("Message Send")
    );
}
