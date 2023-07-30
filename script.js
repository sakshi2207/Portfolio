AOS.init();
function toggleaction() {
  var action = document.querySelector(".action");
  action.classList.toggle("active");
}
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
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
  },
});
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

var menu = document.querySelector(".menu");
var bg = document.querySelector(".bg");

menu.addEventListener("click", function () {
  bg.classList.toggle("active");
  menu.classList.toggle("active");
});

var nav = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".fa");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// function sendEmail() {
//   Email.send({
//     SecureToken: "",
//     To: "maliksakshi248@gmail.com",
//     From: document.getElementsByClassName("email")[0].textContent,
//     Subject: "Website email",
//     Body: document.getElementsByClassName("message")[0].textContent,
//   }).then((message) => alert("Message Send"));
// }

// const admin = require("firebase-admin");

// // Replace with your Firebase Admin SDK configuration
// const serviceAccount = require("./path/to/serviceAccountKey.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // Add any other configuration options if needed
// });

// const firebase = require("firebase/app");
// require("firebase/functions");

// const firebaseConfig = {
//   // Replace with your Firebase web app configuration
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId,
//   // Add other Firebase web app configuration details
// };

// firebase.initializeApp(firebaseConfig);

// const sendEmailReq = firebase.functions().httpsCallable("sendEmail");

// // Function to send the email
// const sendEmail = () => {
//   console.log("ghbn");
//   sendEmailReq({
//     to: "recipient@example.com",
//     subject: "Test Email",
//     text: "This is a test email.",
//   })
//     .then((result) => {
//       console.log(result.data.message);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
require("dotenv").config();
function openGmailCompose() {
  console.log("bodyy");
  // Replace the email address, subject, and body placeholders with desired values.
  const emailAddress = "maliksakshi248@gmail.com";
  const subject =
    "Email from website " + document.querySelector(".name").textContent;
  const body = document.querySelector(".message").textContent;

  // Compose the mailto link with pre-filled fields.
  const mailtoLink = `mailto:${encodeURIComponent(
    emailAddress
  )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the mailto link.
  window.location.href = mailtoLink;
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Function to check if the user is on Android
function isAndroid() {
  return /Android/.test(navigator.userAgent);
}

// Set different href links based on the user agent
var appLink = document.getElementById("appLink");
if (isIOS()) {
  appLink.href =
    "https://apps.apple.com/us/app/joi-guide/id1615751629?ign-itscg=30200&ign-itsct=apps_box_badge";
} else if (isAndroid()) {
  appLink.href =
    "https://play.google.com/store/apps/details?id=com.joiproject&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
} else {
  appLink.href = "https://www.joi.guide/";
}
