import "/css/style.css";

let scroll = true;
let stop = false;
let speedCount = 0;
let version = 0;
let railArray = [];

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
    document.querySelector('.nav__link').addEventListener('click', () => {
        document.querySelector('.nav__wrapper').classList.toggle('expanded');
    });
}
const tunnelSwitchHandler = () => {
    const tunnelSwitch = document.querySelector(".tunnel__button");
    tunnelSwitch.addEventListener(`click`, lightsOn);
}

const lightsOn = () => {
    scroll = false;
    document.body.style.backgroundColor = "var(--mainbgcolor)";
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
    const quizAnimation1 = document.querySelector(".quiz__animation1");
    const quizAnimation2 = document.querySelector(".quiz__animation2");
    const quizAnimation3 = document.querySelector(".quiz__animation3");
    quizAnimation1.play();
    quizAnimation2.play();
    quizAnimation3.play();
    quizAnimation1.addEventListener("complete", quizQuestionOne);
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

    button1.removeEventListener("click", answerRightThree);
    button2.removeEventListener("click", quizQuestionFour);

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




const trackRepairHandler = () => {
    document.querySelector(".railgame__rail1").addEventListener("click", () => trackRepair(1));
    document.querySelector(".railgame__rail2").addEventListener("click", () => trackRepair(2));
    document.querySelector(".railgame__rail3").addEventListener("click", () => trackRepair(3));
    document.querySelector(".railgame__rail4").addEventListener("click", () => trackRepair(4));
}

const trackRepair = (railNumber) => {
    const rail = document.querySelector(".railgame__rail" + railNumber);
    rail.style.animation = "none";
    track.style.animation = "clickable 1s ease-in-out infinite";
    for (let i = 1; i < 5; i++){
            document.querySelector(".railgame__rail"+i).removeEventListener("click", () => trackRepair(railNumber));

     }
    track.addEventListener("click", () => trackProgress(railNumber));
}


const trackProgress = (railNumber) => {
    version++;
    railArray.push(railNumber);
    console.log(railArray)
    track.src = "int3/railgamev" + version + ".png";
    document.querySelector(".railgame__rail"+railNumber).style.opacity = "0";
    if (version < 7) {
        track.removeEventListener("click", trackProgress);
        for(let i = 1; i < 5; i++){
            if(railArray[i] === i){
                 console.log("w"+ railArray.includes(i));
                document.querySelector(".railgame__rail"+i).addEventListener("click", () => trackRepair(i));
             }
            }
    } else {
        track.removeEventListener("click", trackProgress);
        railEndHide.style.opacity = "0";
        railEndTitle.innerHTML = "OH YES!"
        railEndText.innerHTML = "Congrats! you successfully repaired the track. As a reward, you can order your tickets for the next visit to our musuem with a <span class='bold'>10% discount</span>!"
        track.style.visibility = "hidden";
        document.querySelector(".track__animation").classList.add("animation__visible");
        railEndText.style.fontFamily = "var(--bodyfont)"
        railEndButton.style.opacity = "100%";
        railEndButton.style.zIndex = 1;
    }
}

const seatsMove = () => {
    gsap.to(".seats", {
        scale: 8,
        scrollTrigger: {
            trigger: ".seats",
            start: "bottom bottom",
            end: "top 0%",
            pin: true,
            scrub: true
        }
    })
}

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    hamburgerMenu();
    chapterOneAnimation();
    textAnimator();
    tunnelIllusion();
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // }
    tunnelSwitchHandler();
    railwayLineHorizontalMove();
    quizButtonHandler();
    chapterTwoAnimation();
    trackRepairHandler();
    seatsMove();
}

init();