import "/css/style.css";

let scroll = true;
const hamburgerMenu = () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav__wrapper').classList.toggle('expanded');
    });
}
const tunnelSwitchHandler = () => {
    const tunnelSwitch = document.querySelector(".tunnel__button");
    tunnelSwitch.addEventListener(`click`, lightsOn);
}
const disableScroll = () => {
    gsap.to(".body", {
        scrollTrigger: {
            trigger: ".tunnel__dark--wrapper",
            start: "bottom 100%",
            end: "bottom 95%",
            onLeave: function () {
                document.body.classList.add("disable-scrolling");
            }
        }
    })
}
const enableScroll = () => {
    document.body.classList.remove("disable-scrolling");
    console.log("init werkt")

}

const lightsOn = () => {
    scroll = false;
    const tunnelSwitch = document.querySelector(".tunnel__button");
    tunnelSwitch.src = "./public/assets/img/tunnelbuttonup.png";
    document.querySelector(".tunnel__hidebg").style.opacity = "100";
    document.querySelector(".tunnel__hide").style.backgroundColor = "#F5EFE7";
    gsap.to(".tunnel__dark--wrapper", { opacity: 0, duration: 2 });
}
const chapterOneAnimation = () => {
    gsap.from(".chapterone__image", {
        x: 400,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 45%",
            end: "bottom 0%",
            pin: true,
            scrub: 1
        }
    })
    gsap.from(".chapterone__title", {
        x: -400,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 45%",
            end: "bottom 0%",
            scrub: 1
        }
    })
    gsap.to(".chapterone__image", {
        y: 300,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 30%",
            end: "bottom 30%",
            scrub: 1
        }
    })
    gsap.to(".chapterone__title", {
        y: -300,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 30%",
            end: "bottom 30%",
            scrub: 1
        }
    })
}


const textAnimator = () => {
    gsap.from(".ch1__p1--textwrapper", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch1__p1--textwrapper",
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1
        }
    })
    gsap.from(".chapter1__part2--wrapper", {
        x: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chapter1__part2--wrapper",
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1
        }
    })
    gsap.from(".ch1__p5", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch1__p5",
            start: "top 60%",
            end: "bottom 50%",
            scrub: 1
        }
    })

}
const tunnelIllusion = () => {
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

const railwayLineHorizontalMove = () => {
    gsap.to(".railwayline__wrapper--all", {
        x: "-330vw",
        scrollTrigger: {
            trigger: ".railwayline__wrapper--all",
            start: "top 40%",
            end: "bottom  0",
            scrub: 1,
            pin: ".ch1__p6--linewrapper",
        }
    })
}



const intervalFunction = () => {
    if (scroll === true) {
        disableScroll();
    } else if (scroll === false) {
        enableScroll()
    }
}

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    hamburgerMenu();
    chapterOneAnimation();
    textAnimator();
    tunnelIllusion();
    setInterval(intervalFunction, 100)
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    tunnelSwitchHandler();
    railwayLineHorizontalMove();
}

init();