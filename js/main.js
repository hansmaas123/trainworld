import "/css/style.css";

let scroll = true;
let stop = false;
let speedCount = 0;
let version = 0;

const quizText = document.querySelector(".quiz__text");
const speedWrapper = document.querySelector(".speed__wrapper");
const speedWrapperWrapper = document.querySelector(".speed__wrapper--wrapper");
const changeGridQuiz = document.querySelector(".ch1__p8");

const rail1 = document.querySelector(".railgame__rail1");
const rail2 = document.querySelector(".railgame__rail2");
const rail3 = document.querySelector(".railgame__rail3");
const rail4 = document.querySelector(".railgame__rail4");
const track = document.querySelector(".railgame__track");
const railEndHide = document.querySelector(".railgame__text");
const railEndText = document.querySelector(".railgame__subtext");
const railEndTitle = document.querySelector(".railgame__title");
const railEndButton = document.querySelector(".railgame__end--wrapper");

const button1 = document.createElement(`button`);
const button2 = document.createElement(`button`);
const speed = document.createElement(`p`);

button1.classList.add("quiz__button--style");
button2.classList.add("quiz__button--style2");
speed.classList.add("speed__style");

const hamburgerMenu = () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav__wrapper').classList.toggle('expanded');
    });
}
const tunnelSwitchHandler = () => {
    const tunnelSwitch = document.querySelector(".tunnel__button");
    tunnelSwitch.addEventListener(`click`, lightsOn);
}
// const disableScroll = () => {
//     gsap.to(".body", {
//         scrollTrigger: {
//             trigger: ".tunnel__dark--wrapper",
//             start: "bottom 120%",
//             end: "bottom 115%",
//             onLeave: function () {
//                 document.body.classList.add("disable-scrolling");
//             }
//         }
//     })
// }
// const enableScroll = () => {
//     document.body.classList.remove("disable-scrolling");
//     console.log("init werkt")

// }

const lightsOn = () => {
    scroll = false;
    const tunnelSwitch = document.querySelector(".tunnel__button");
    document.body.style.backgroundColor = "var(--mainbgcolor)";
    tunnelSwitch.src = "./public/assets/img/tunnelbuttonup.png";
    document.querySelector(".tunnel__hide").style.opacity = "100";
    document.querySelector(".ch1__p3--tunnel").style.opacity = "0%"
    document.querySelector(".tunnel__dark--wrapper").style.visibility = "hidden";
    document.body.classList.remove("disable-scrolling");
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
            scrub: 1
        }
    })
    gsap.to(".chapterone__image", {
        y: 300,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 10%",
            end: "bottom 10%",
            scrub: 1
        }
    })
    gsap.to(".chapterone__title", {
        y: -300,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 10%",
            end: "bottom 10%",
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
    // gsap.from(".ch1__p2--contentwrapper", {
    //     y: 100,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: ".chapter1__part2--wrapper",
    //         start: "top 80%",
    //         end: "bottom 80%",
    //         scrub: 1
    //     }
    // })
    // gsap.from(".ch1__p5", {
    //     y: 100,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: ".ch1__p5",
    //         start: "top 60%",
    //         end: "bottom 50%",
    //         scrub: 1
    //     }
    // })

}
const tunnelIllusion = () => {
    gsap.to(".ch1__p3--tunnel", {
        scale: 10,
        opacity: "100%",
        scrollTrigger: {
            trigger: ".ch1__p3--tunnel",
            start: "top 50%",
            end: "bottom -35%",
            pin: true,
            scrub: 1,
            onLeave: function () {
                document.querySelector(".tunnel__dark--wrapper").style.visibility = "visible";
                document.body.classList.add("disable-scrolling");
                document.body.style.backgroundColor = "#010101";
            },
            onEnterBack: self => self.disable()
        }
    })
    // if (scroll === true){

    //     gsap.to(".tunnel__dark--wrapper", {
    //         opacity: "100%",
    //         scrollTrigger: {
    //             trigger: ".tunnel__dark--text",
    //             start: "top 40%",
    //             end:"top 39%",
    //             pin: ".tunnel__dark--wrapper",
    //             onLeave: function () {
    //                 document.body.classList.add("disable-scrolling");
    //             },
    //             onLeaveBack: self => self.disable()
    //         }
    //     })
    // } 

}

const railwayLineHorizontalMove = () => {
    gsap.to(".railwayline__wrapper--all", {
        x: "-330vw",
        scrollTrigger: {
            trigger: ".railwayline__wrapper--all",
            start: "top 40%",
            end: "bottom 0",
            scrub: 1,
            pin: ".ch1__p6--linewrapper",
        }
    })
}

const quizButtonHandler = () => {
    const quizButton = document.querySelector(".quiz__button");
    quizButton.addEventListener("click", playQuiz);
}
const playQuiz = () => {
    gsap.to(".quiz__title", { marginTop: 0 })
    gsap.to(".quiz__text", { opacity: 0 })
    gsap.to(".quiz__button", { opacity: 0 })
    const quizAnimation = document.querySelector(".quiz__animation");
    quizAnimation.play();
    quizAnimation.addEventListener("complete", quizQuestionOne);
}
const quizQuestionOne = () => {
    gsap.to(".quiz__text", { opacity: 1 })
    gsap.to(".quiz__text", { marginBottom: 0 })
    quizText.innerHTML = "What did the people in Belgium think of the construction of high speed lines?"
    quizText.style.fontWeight = "600";
    quizText.style.textTransform = "uppercase";



    button1.innerHTML = "Controversial"
    button2.innerHTML = "Practical"
    speed.innerHTML = speedCount + " KM/H";

    const quizButtonWrapper = document.querySelector(".quiz__button--wrapper");
    quizButtonWrapper.appendChild(button1);
    quizButtonWrapper.appendChild(button2);
    const speedWrapper = document.querySelector(".speed__wrapper");
    speedWrapper.appendChild(speed);

    button1.addEventListener("click", answerRightOne);
    button2.addEventListener("click", quizQuestionTwo);
}
const answerRightOne = () => {
    speedCount += 100;
    quizQuestionTwo();
}


const quizQuestionTwo = () => {
    quizText.innerHTML = "How much did the first full 300 km/h high-speed line network in Europe cost?"
    button1.innerHTML = "4 Billion Euro"
    button2.innerHTML = "5 Billion Euro"
    speed.innerHTML = speedCount + " KM/H";

    button1.removeEventListener("click", answerRightOne);
    button2.removeEventListener("click", quizQuestionTwo);

    button1.addEventListener("click", quizQuestionThree);
    button2.addEventListener("click", answerRightTwo);
}
const answerRightTwo = () => {
    speedCount += 100;
    quizQuestionThree();
}
const quizQuestionThree = () => {
    quizText.innerHTML = "How long is the Channel Tunnel?"
    button1.innerHTML = "50 KM"
    button2.innerHTML = "80 KM"
    speed.innerHTML = speedCount + " KM/H";

    button1.removeEventListener("click", quizQuestionThree);
    button2.removeEventListener("click", answerRightTwo);

    button1.addEventListener("click", answerRightThree);
    button2.addEventListener("click", quizQuestionFour);
}

const answerRightThree = () => {
    speedCount += 100;
    quizQuestionFour();
}
const quizQuestionFour = () => {
    quizText.innerHTML = "Which city was connected to Chênée with a high-speed line on 15 December 2002?"
    button1.innerHTML = "Walhorn"
    button2.innerHTML = "Liège"
    speed.innerHTML = speedCount + " KM/H";

    button1.removeEventListener("click", quizQuestionFour);
    button2.removeEventListener("click", answerRightThree);

    button1.addEventListener("click", answerRightFour);
    button2.addEventListener("click", quizEnd);

}
const answerRightFour = () => {
    speedCount += 100;
    quizEnd();
}
const quizEnd = () => {
    button1.removeEventListener("click", answerRightFour);
    button2.removeEventListener("click", quizEnd);
    
    button1.style.opacity = 0;
    button2.style.opacity = 0;
    speed.classList.add("speed__style--end");
    speedWrapper.classList.add("speed__wrapper--end");
    changeGridQuiz.classList.add(("change__grid"));
    
    if (speedCount > 200) {
        quizText.innerHTML = "Congrats! You drove fast enough and passed the barrier in time!"
        speedWrapperWrapper.classList.add("speed__wrapper--endgoodbg");
    } else {
        quizText.innerHTML = "Sadly, you drove too slow and wouldn’t pass the railway barrier in time. This resulted into pulling the brakes"
        speedWrapperWrapper.classList.add("speed__wrapper--endbadbg");
    }
}
const chapterTwoAnimation = () => {
    gsap.from(".ch2__img1", {
        opacity: 0,
        y: -100,
        scrollTrigger: {
            trigger: ".ch2__title--wrapper",
            start: "top 25%",
            end: "bottom 10%",
            pin: ".ch2",
            scrub: 1
        }
    })
    gsap.from(".ch2__img2", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: ".ch2__title--wrapper",
            start: "top 25%",
            end: "bottom 20%",
            scrub: 1
        }
    })
    gsap.from(".ch2__title", {
        x: 400,
        scrollTrigger: {
            trigger: ".ch2__title--wrapper",
            start: "top 25%",
            end: "bottom 20%",
            scrub: 1
        }
    })

    // gsap.to(".ch2__img1", {
    //     x: 400,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: ".ch2",
    //         start: "top 15%",
    //         end: "bottom 10%",
    //         scrub: 1
    //     }
    // })
    // gsap.to(".ch2__img2", {
    //     x: -400,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: ".ch2",
    //         start: "top 15%",
    //         end: "bottom 10%",
    //         scrub: 1
    //     }
    // })
}


// const intervalFunction = () => {
//     if (scroll === true) {
//         disableScroll();
//     } else if (scroll === false) {
//         enableScroll()
//     }
// }
const trackRepairHandler = () => {
    rail1.addEventListener("click", trackRepair1);
    rail2.addEventListener("click", trackRepair2);
    rail3.addEventListener("click", trackRepair3);
    rail4.addEventListener("click", trackRepair4);
}

const trackRepair1 = () => {
    rail1.removeEventListener("click", trackRepair1);
    rail2.removeEventListener("click", trackRepair2);
    rail3.removeEventListener("click", trackRepair3);
    rail4.removeEventListener("click", trackRepair4);
    track.addEventListener("click", trackProgress1);
}
const trackRepair2 = () => {
    rail1.removeEventListener("click", trackRepair1);
    rail2.removeEventListener("click", trackRepair2);
    rail3.removeEventListener("click", trackRepair3);
    rail4.removeEventListener("click", trackRepair4);
    track.addEventListener("click", trackProgress2);
}
const trackRepair3 = () => {
    rail1.removeEventListener("click", trackRepair1);
    rail2.removeEventListener("click", trackRepair2);
    rail3.removeEventListener("click", trackRepair3);
    rail4.removeEventListener("click", trackRepair4);
    track.addEventListener("click", trackProgress3);
}
const trackRepair4 = () => {
    rail1.removeEventListener("click", trackRepair1);
    rail2.removeEventListener("click", trackRepair2);
    rail3.removeEventListener("click", trackRepair3);
    rail4.removeEventListener("click", trackRepair4);
    track.addEventListener("click", trackProgress4);
}
const trackProgress1 = () => {
    version++;
    track.src = "./public/assets/img/railgamev" + version + ".png",
    rail1.style.opacity = "0";
    if (version < 4) {
        track.removeEventListener("click", trackProgress1);
        rail2.addEventListener("click", trackRepair2);
        rail3.addEventListener("click", trackRepair3);
        rail4.addEventListener("click", trackRepair4);
    } else {
        track.removeEventListener("click", trackProgress1);
        railEndHide.style.opacity = "0";
        railEndTitle.innerHTML = "OH YES"
        railEndText.innerHTML = "Congrats! you successfully repaired the track. As a reward, you can order your tickets for the next visit to our musuem with a <span class='bold'>10% discount</span>!"
        railEndText.style.fontFamily = "var(--bodyfont)"
         railEndButton.style.opacity = "100%";
        railEndButton.style.zIndex = 1;

    }
}
const trackProgress2 = () => {
    version++;
    track.src = "./public/assets/img/railgamev" + version + ".png"
    rail2.style.opacity = "0"
    if (version < 4) {
        track.removeEventListener("click", trackProgress2);
        rail1.addEventListener("click", trackRepair1);
        rail3.addEventListener("click", trackRepair3);
        rail4.addEventListener("click", trackRepair4);
    } else {
        track.removeEventListener("click", trackProgress2);
        railEndHide.style.opacity = "0";
        railEndTitle.innerHTML = "OH YES"
        railEndText.innerHTML = "Congrats! you successfully repaired the track. As a reward, you can order your tickets for your next visit to our musuem with a <span class='bold'>10% discount</span>!"
        railEndText.style.fontFamily = "var(--bodyfont)"
         railEndButton.style.opacity = "100%";
        railEndButton.style.zIndex = 1;
    }
}
const trackProgress3 = () => {
    version++;
    track.src = "./public/assets/img/railgamev" + version + ".png"
    rail3.style.opacity = "0"
    if (version < 4) {
        track.removeEventListener("click", trackProgress3);
        rail1.addEventListener("click", trackRepair1);
        rail2.addEventListener("click", trackRepair2);
        rail4.addEventListener("click", trackRepair4);
    } else {
        track.removeEventListener("click", trackProgress3);
        railEndHide.style.opacity = "0";
        railEndTitle.innerHTML = "OH YES"
        railEndText.innerHTML = "Congrats! you successfully repaired the track. As a reward, you can order your tickets for the next visit to our musuem with a <span class='bold'>10% discount</span>!"
        railEndText.style.fontFamily = "var(--bodyfont)"
         railEndButton.style.opacity = "100%";
        railEndButton.style.zIndex = 1;
    }
}
const trackProgress4 = () => {
    version++;
    track.src = "./public/assets/img/railgamev" + version + ".png"
    rail4.style.opacity = "0"
    if (version < 4) {
        track.removeEventListener("click", trackProgress4);
        rail1.addEventListener("click", trackRepair1);
        rail2.addEventListener("click", trackRepair2);
        rail3.addEventListener("click", trackRepair3);
    } else {
        track.removeEventListener("click", trackProgress4);
        railEndHide.style.opacity = "0";
        railEndTitle.innerHTML = "OH YES"
        railEndText.innerHTML = "Congrats! you successfully repaired the track. As a reward, you can order your tickets for the next visit to our musuem with a <span class='bold'>10% discount</span>!";
        railEndText.style.fontFamily = "var(--bodyfont)";
        railEndButton.style.opacity = "100%";
        railEndButton.style.zIndex = 1;
    }
}

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    hamburgerMenu();
    chapterOneAnimation();
    textAnimator();
    tunnelIllusion();
    // setInterval(intervalFunction, 100)
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // }
    tunnelSwitchHandler();
    railwayLineHorizontalMove();
    quizButtonHandler();
    chapterTwoAnimation();
    trackRepairHandler();
}

init();