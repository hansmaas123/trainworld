import "/css/style.css";


let speedCount = 0;
let version = 0;
let railArray = [];
let railNumberActive;

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
        xPercent: 300,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 20%",
            end: "bottom 0%",
            pin: true,
            scrub: 1
        }
    })
    gsap.from(".chapterone__title", {
        xPercent: -300,
        scrollTrigger: {
            trigger: ".chapterone__wrapper",
            start: "top 20%",
            end: "bottom 0%",
            scrub: 1
        }
    })
    gsap.from(".mobile__hidden2", {
        xPercent: -300,
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
    gsap.to(".mobile__hidden2", {
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
    gsap.from(".ch1__p2--contentwrapper", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chapter1__part2--wrapper",
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1
        }
    })
 

}
const tunnelIllusion = () => {
    gsap.to(".ch1__p3--tunnel", {
        scale: 5,
        opacity: "200%",
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
        x: "-300vw",
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
    speedCount+=100;
    quizEnd();
}
const quizEnd = () => {
    button1.removeEventListener("click", answerRightFour);
    button2.removeEventListener("click", quizEnd);
    speed.innerHTML = speedCount + " KM/H";

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

const ch1P4Animation = () => {
    gsap.from(".ch1__p4--textwrapper", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch1__p4--textwrapper",
            start:"top 90%",
            end:"bottom 90%",
            scrub: 1
        }
    })
}

const ch1P7Animation = () => {
    gsap.from(".ch1__p7--wrapper", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch1__p7--wrapper",
            start:"top 50%",
            end:"bottom 50%",
            scrub: 1
        }
    })
    gsap.from(".ch1__p7--image", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch1__p7--image",
            start:"top 50%",
            end:"bottom 50%",
            scrub: 1
        }
    })
}
const ch2P1Animation = () => {
    gsap.from(".mobile__hidden8--inner", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".mobile__hidden8--inner",
            start:"top 70%",
            end:"bottom 70%",
            scrub: 1
        }
    })
}
const ch2P2Animation = () => {
    gsap.from(".mobile__hidden9", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".mobile__hidden9",
            start:"top 70%",
            end:"bottom 70%",
            scrub: 1
        }
    })
}
const chapterThreeAnimation = () => {
    gsap.from(".ch3__title", {
        y: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch3",
            start: "top 10%",
            end: "bottom 10%",
            pin: true,
            scrub: 1
        }
    })
    gsap.from(".ch3__img", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch3",
            start: "top 10%",
            end: "bottom 10%",
            scrub: 1
        }
    })
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
        xPercent: 300,
        scrollTrigger: {
            trigger: ".ch2__title--wrapper",
            start: "top 25%",
            end: "bottom 20%",
            scrub: 1
        }
    })
}
const ch2P3Animation = () => {
    gsap.from(".ch2__p3--img1", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch2__p3--wrapper1",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1
        }
    })
    gsap.from(".ch2__p3--text1", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch2__p3--wrapper1",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1
        }
    })
    gsap.from(".ch2__p3--img2", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch2__p3--wrapper2",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1
        }
    })
    gsap.from(".ch2__p3--text2", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch2__p3--wrapper2",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1
        }
    })
    gsap.from(".ch2__p3--img3", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch2__p3--wrapper3",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1
        }
    })
    gsap.from(".ch2__p3--text3", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".ch2__p3--wrapper3",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1
        }
    })
    
}



const trackRepairHandler = () => {
        rail1.addEventListener("click", railClickHandler1);
        rail2.addEventListener("click", railClickHandler2);
        rail3.addEventListener("click", railClickHandler3);
        rail4.addEventListener("click", railClickHandler4);
}

const railClickHandler1 = () => {
    trackRepair(1);
};

const railClickHandler2 = () => {
    trackRepair(2);
};

const railClickHandler3 = () => {
    trackRepair(3);
};

const railClickHandler4 = () => {
    trackRepair(4);
};

const trackRepair = (railNumber) => {
    railNumberActive = railNumber;
    const rail = document.querySelector(".railgame__rail" + railNumber);
    rail.style.animation = "none";
    track.style.animation = "clickable 1s ease-in-out infinite";

    rail1.removeEventListener("click", railClickHandler1);
    rail2.removeEventListener("click", railClickHandler2);
    rail3.removeEventListener("click", railClickHandler3);
    rail4.removeEventListener("click", railClickHandler4);

    track.addEventListener("click", trackClickHandler);
}
const trackClickHandler = () => {
    trackProgress(railNumberActive);
}



const trackProgress = (railNumber) => {
    track.style.animation = "none";

    version++;
    track.src = `${import.meta.env.BASE_URL}/railgamev${version}.png`;
    document.querySelector(".railgame__rail"+railNumber).style.opacity = "0";
    if (version < 4) {
        track.removeEventListener("click", trackClickHandler);
        railArray.push(railNumber);
            if(railArray.includes(1) === false){
                rail1.addEventListener("click", railClickHandler1);
            }
            if(railArray.includes(2) === false){
                rail2.addEventListener("click", railClickHandler2);
            }
            if(railArray.includes(3) === false){
                rail3.addEventListener("click", railClickHandler3);
            }
            if(railArray.includes(4) === false){
                rail4.addEventListener("click", railClickHandler4);
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
        document.querySelector(".railway__end--button").classList.add("railway__end--button1")
    }
}

const seatsMove = () => {
    gsap.to(".seats", {
        scale: 8,
        scrollTrigger: {
            trigger: ".seats",
            start: "bottom 100%",
            end: "top -200%",
            pin: true,
            scrub: true
        }
    })
}


const trainLightAnimation = () => {
    gsap.from(".ch3__p2--img", {
        xPercent: -100,
        scrollTrigger: {
            trigger: ".ch3__p2--img",
            start: "top 90%",
            end: "bottom 90%",
            scrub: true
        }
    })
}
const hideLoadingScreenHandler = () => {
    const loadIcon = document.querySelector(".loading__screen");
    loadIcon.classList.add("load__icon--hidden");
    loadIcon.addEventListener("transitionend", () => {
        loadIcon.style.display = "none";
    });
};




const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    hamburgerMenu();
    chapterOneAnimation();
    textAnimator();
    tunnelIllusion();
        tunnelSwitchHandler();
        railwayLineHorizontalMove();
        ch1P4Animation()
        quizButtonHandler();
        chapterTwoAnimation();
        trackRepairHandler();
        ch1P7Animation()
        ch2P2Animation()
        ch2P1Animation()
        chapterThreeAnimation();
        ch2P3Animation();
        trainLightAnimation();
        seatsMove();
        hideLoadingScreenHandler();
    }
    
    init();
