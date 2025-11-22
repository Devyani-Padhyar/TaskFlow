let settingsbtn = document.querySelector('.settingsbtn')
let loginbtn = document.querySelector('.submit-btn')
let darkmode = document.querySelector('.dark-mode-outer')
let darkmodebtn = document.querySelector('.dark-mode')
let header = document.querySelector('header');
let cardh2 = document.querySelector('.card-h2')
let navbtn = document.querySelectorAll('.navbtn')
let inputName = document.querySelector('#name')
let inputPassword = document.querySelector('#password')
let loginSection = document.querySelector('.login-section')
let logincard = document.querySelector('.login-card')

let loginnavbtn = document.querySelector('.loginbtn')
// ABOUT SECTION
let abtSection = document.querySelector('.about-section')
let aboutbtn = document.querySelector('.aboutbtn')
// --------------------

// Features SECTION
let features = document.querySelector('.features')
let featuresbtn = document.querySelector(".featuresbtn")
let featuresCard = document.querySelectorAll('.feature-card')
// --------------------

settingsbtn.addEventListener('click', () => {
    darkmode.classList.toggle('toggle-darkmode')
})

function darkModeBefore() {
    navbtn.forEach((btn) => {
        btn.classList = 'navbtn'
    })
    darkmodebtn.value = 'Dark Mode'
    document.body.classList.remove('DM-body');
    header.classList.remove('DM-header')
    cardh2.style.background = ' linear-gradient(90deg, var(--dark-accent), #3B82F6)'
    loginbtn.classList.remove('DM-button')
    darkmode.style.background = '#0e1f50dd'
    darkmodebtn.style.background = 'rgba(148, 241, 255, 0.879)'
    loginbtn.style.background = 'linear-gradient(90deg, var(--dark-accent), #3B82F6)'
    abtSection.classList.remove('DM-about-section')
    features.classList.remove('DM-features')
    featuresCard.forEach((card) => {
        card.classList.remove('DM-feature-card')
    })
}

function darkModeAfter() {
    darkmodebtn.value = 'Light Mode'
    document.body.classList = 'DM-body'
    cardh2.style.background = 'linear-gradient(90deg, #0F2027, #203A43, #2C5364)'
    header.classList = 'DM-header'
    darkmode.style.background = '#1c2f5edd'
    darkmodebtn.style.background = 'rgba(173, 230, 245, 1)'
    navbtn.forEach((btn) => {
        btn.classList = 'DM-navbtn'
    })
    loginbtn.style.background = 'linear-gradient(90deg, #0F2027, #203A43, #2C5364)';
    abtSection.classList.add('DM-about-section')
    features.classList.add('DM-features')
    featuresCard.forEach((card) => {
        card.classList.add('DM-feature-card')
    })
}

darkmodebtn.addEventListener('click', () => {
    darkmode.classList.toggle('toggle-darkmode')
    if (darkmodebtn.value == 'Dark Mode') {
        darkModeAfter()
    } else {
        darkModeBefore()
    }
})

let userList = {
    'Devyani': 12345,
    'Mahir': 1111,
}

loginbtn.addEventListener('click', () => {
    if (inputName.value in userList && userList[inputName.value] == inputPassword.value) {
        loginSection.style.display = 'None'
    } else {
        alert('No not in the database!')
    }
    darkmode.classList.remove('toggle-darkmode')
    inputName.value = ""
    inputPassword.value = ""
});

loginnavbtn.addEventListener('click', () => {
    darkmode.classList.remove('toggle-darkmode')
    loginSection.style.display = 'Block'
    abtSection.style.display = 'None';
    features.style.display = 'None'
    loginSection.style.display = 'Block'
})
// About Section
aboutbtn.addEventListener('click', () => {
    darkmode.classList.remove('toggle-darkmode')
    abtSection.style.display = 'Block';
    loginSection.style.display = 'None';
    features.style.display = 'None'
})
// Features section
featuresbtn.addEventListener('click', () => {
    darkmode.classList.remove('toggle-darkmode')
    abtSection.style.display = 'None'
    loginSection.style.display = 'None'
    features.style.display = 'Block'
})
