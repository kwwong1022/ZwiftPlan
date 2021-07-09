// Web Style Function
// Navbar
const mainNav = document.querySelector('.main-nav');
const toggler = document.querySelector('.toggler');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

toggler.addEventListener('click', () => {
    console.log("clicked");
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
        }
    });
});

visualViewport.addEventListener('resize', function () {
    nav.classList.remove('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
    });
});

// Welcome Message
const msgWelcome = document.querySelector('#msg-welcome');
const welcomeBtn = document.querySelector('#close-welcome-msg');

welcomeBtn.addEventListener('click', () => {
    msgWelcome.style.display = "none";
})

// User Profile
let profileIsClosed = false;
const userProfileSession = document.querySelector("#user-profile");
const userInfo = document.querySelector('#user-info');
const userProileBreakLine = document.querySelector("#user-profile .break-line");
// Button Animation
const hideProfileBtn = document.querySelector('.hide-session-btn');
const hideBtnL = document.querySelector('.hide-session-l');
const hideBtnR = document.querySelector('.hide-session-r');

hideProfileBtn.addEventListener('click', () => {
    if (profileIsClosed) {
        hideBtnL.style.transform = "rotate(45deg)";
        hideBtnR.style.transform = "rotate(-45deg)";
        userInfo.style.display = "inline";
        userProileBreakLine.style.marginTop = "2.5rem";
        userProfileSession.style.padding = "1rem 2rem 1rem";
        profileIsClosed = false;
    } else {
        hideBtnL.style.transform = "rotate(-45deg)";
        hideBtnR.style.transform = "rotate(45deg)";
        userInfo.style.display = "none";
        userProileBreakLine.style.marginTop = "1rem";
        userProfileSession.style.padding = ".05rem 2rem 1rem";
        profileIsClosed = true;
    }
})

// Plan Tool
const newPlanCard = document.querySelector('.plan-card');
const titleZoneLv = document.querySelector('#title-zone-level');
const titlePower = document.querySelector('#title-power');

const newPowerPercentage = document.querySelector('#power-percentage');
const addPowerPercentageSmall = document.querySelector('#power-percentage-add-sm');
const addPowerPercentageLarge = document.querySelector('#power-percentage-add-l');
const minusPowerPercentageSmall = document.querySelector('#power-percentage-minus-sm');
const minusPowerPercentageLarge = document.querySelector('#power-percentage-minus-l');

const newPowerWatt = document.querySelector('#power-watt');
const addPowerWattSmall = document.querySelector('#power-watt-add-sm');
const addPowerWattLarge = document.querySelector('#power-watt-add-l');
const minusPowerWattSmall = document.querySelector('#power-watt-minus-sm');
const minusPowerWattLarge = document.querySelector('#power-watt-minus-l');

let userWeight = "75";
let userFTP = "200";

addPowerPercentageSmall.addEventListener('click', () => {
    let currPer = parseInt(newPowerPercentage.innerText);
    currPer += 1;
    newPowerPercentage.innerText = currPer;
    updatePower();
    updateAddCardTitle();
})
addPowerPercentageLarge.addEventListener('click', () => {
    let currPer = parseInt(newPowerPercentage.innerText);
    currPer += 5;
    newPowerPercentage.innerText = currPer;
    updatePower();
    updateAddCardTitle();
})

minusPowerPercentageSmall.addEventListener('click', () => {
    let currPer = parseInt(newPowerPercentage.innerText);
    currPer -= 1;
    newPowerPercentage.innerText = currPer;
    updatePower();
    updateAddCardTitle();
})
minusPowerPercentageLarge.addEventListener('click', () => {
    let currPer = parseInt(newPowerPercentage.innerText);
    currPer -= 5;
    newPowerPercentage.innerText = currPer;
    updatePower();
    updateAddCardTitle();
})

addPowerWattSmall.addEventListener('click', () => {
    let currPow = parseInt(newPowerWatt.innerText);
    currPow += 1;
    newPowerWatt.innerText = currPow;
    updatePercentage();
    updateAddCardTitle();
})
addPowerWattLarge.addEventListener('click', () => {
    let currPow = parseInt(newPowerWatt.innerText);
    currPow += 5;
    newPowerWatt.innerText = currPow;
    updatePercentage();
    updateAddCardTitle();
})

minusPowerWattSmall.addEventListener('click', () => {
    let currPow = parseInt(newPowerWatt.innerText);
    currPow -= 1;
    newPowerWatt.innerText = currPow;
    updatePercentage();
    updateAddCardTitle();
})
minusPowerWattLarge.addEventListener('click', () => {
    let currPow = parseInt(newPowerWatt.innerText);
    currPow -= 5;
    newPowerWatt.innerText = currPow;
    updatePercentage();
    updateAddCardTitle();
})

let updatePower = () => {
    let currPer = parseInt(newPowerPercentage.innerText) / 100;
    let currPow = Math.floor(userFTP * currPer);
    newPowerWatt.innerText = currPow;
}

let updatePercentage = () => {
    let currPow = parseInt(newPowerWatt.innerText);
    let currPer = Math.floor(currPow / userFTP * 100);
    newPowerPercentage.innerText = currPer;
}

let updateAddCardTitle = () => {
    let currPow = parseInt(newPowerWatt.innerText);
    let currZone = "";
    let currBgColor = "";
    let currZonePow = currPow / userFTP;

    if (currZonePow < 0.56) {
        currZone = "1"
        currBgColor = "rgb(141, 141, 141)";
    } else if (currZonePow >= 0.56 && currZonePow < 0.76) {
        currZone = "2"
        currBgColor = "rgb(59, 179, 248)";
    } else if (currZonePow >= 0.76 && currZonePow < 0.88) {
        currZone = "3"
        currBgColor = "rgb(46, 196, 71)";
    } else if (currZonePow >= 0.88 && currZonePow < 0.95) {
        currZone = "4"
        currBgColor = "rgb(252, 132, 53)";
    } else if (currZonePow >= 0.95 && currZonePow < 1.05) {
        currZone = "5"
        currBgColor = "rgb(233, 203, 68)";
    } else if (currZonePow >= 1.05 && currZonePow < 1.55) {
        currZone = "6"
        currBgColor = "rgb(233, 68, 68)";
    } else {
        currZone = "7"
        currBgColor = "rgb(170, 35, 159)";
    }

    titleZoneLv.innerText = currZone;
    titlePower.innerText = newPowerWatt.innerText;
    newPlanCard.style.backgroundColor = currBgColor;
}