AOS.init();
function toggleaction() {
            var action = document.querySelector('.action');
            action.classList.toggle('active');
        }
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
            }
        });    
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {

var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
var toRotate = elements[i].getAttribute('data-rotate');
var period = elements[i].getAttribute('data-period');
if (toRotate) {
  new TxtType(elements[i], JSON.parse(toRotate), period);

}
}   

};


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
        SecureToken: "b65dec8c-52df-43b3-afb3-77058ec797ae",
        To: 'maliksakshi248@gmail.com',
        From: document.getElementsByClassName("email")[0].textContent,
        Subject: "Website email",
        Body: document.getElementsByClassName("message")[0].textContent,
    }).then(
        message => alert("Message Send")
    );
}