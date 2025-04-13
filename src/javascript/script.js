$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })
});

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.service-card');

const cardWidth = cards[0].getBoundingClientRect().width;

const visibleCards = 4;

let currentIndex = 0;

function moveCarousel() {
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


nextBtn.addEventListener('click', () => {
    const maxIndex = cards.length - visibleCards; // Calcula o índice máximo
    if (currentIndex < maxIndex) {
        currentIndex++;
        moveCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveCarousel();
    }
});

const form = document.querySelector('form');
const client_name = document.getElementById('client-name');
const email = document.getElementById('email');
const city = document.getElementById('city');
const country = document.getElementById('country');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkIputs();
});

function checkIputs(){
    const nameValue = client_name.value
    const emailValue = email.value
    const cityValue = city.value
    const countryValue = country.value

    if(nameValue === ""){
        setErrorFor(client_name, "O nome é obrigatório.")} else {
        setSuccessFor(client_name)
        }
        
    if(emailValue === ""){
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
            setErrorFor(email, "Por favor, insira um e-mail válido.")
        } else {
            setSuccessFor(email)
        }

    if(cityValue === ""){
        setErrorFor(city, "A cidade é obrigatória.")} else {
        setSuccessFor(city)
        }

    if(countryValue === ""){
        setErrorFor(country, "O estado é obrigatório.")
    } else {setSuccessFor(country)}
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = "form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElement

    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }