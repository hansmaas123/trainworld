import "/css/style.css";

const init = () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav__wrapper').classList.toggle('expanded');
    });
}

init();