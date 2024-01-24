import "/css/style.css";


const hamburgerMenu = () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav__wrapper').classList.toggle('expanded');
    });
}
const tunnelSwitchHandler = () => {
    const tunnelSwitch = document.querySelector(".tunnel__button");
    tunnelSwitch.addEventListener(`click`, lightsOn);
}
const lightsOn = () => {
    const tunnelSwitch = document.querySelector(".tunnel__button");
    tunnelSwitch.src = "./public/assets/img/tunnelbuttonup.png"
    document.querySelector(".tunnel__hide").style.display = "inline"
    gsap.to(".tunnel__dark--wrapper", {opacity:0, duration:1})
}
const chapterOneAnimation = () => {
    gsap.from(".chapterone__image", {
        x: 400,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 20%",
            end: "bottom 0%",
            pin: true,
            scrub: 1
        }
    })
    gsap.from(".chapterone__title", {
        x: -400,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 20%",
            end: "bottom 0%",
            pin: true,
            scrub: 1
        }
    })
}
const tunnelIllustion = () => {
    const tl = gsap.timeline();
    tl.to(".ch1__p3--tunnel", {
        scale: 10,
        opacity: "100%",
        scrollTrigger: {
            trigger: ".ch1__p3--tunnel",
            start: "top 50%",
            end: "bottom -50%",
            pin: true,
            scrub: 1,
        }
    })
    .to(".tunnel__dark--wrapper", {
        visibility: "visible",
        scrollTrigger: {
            trigger: ".tunnel__dark--text",
            start: "top 25%",
            pin: ".tunnel__dark--wrapper",
            scrub: 1
        }
    })
}

const init = () => {
    hamburgerMenu();
    tunnelIllustion();
    tunnelSwitchHandler();
    chapterOneAnimation();
}

init();