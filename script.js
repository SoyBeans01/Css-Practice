const hamburger = document.getElementsByClassName("hamburger")[0];
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];

const addActive = () =>{
    if(hamburger.classList[1] == 'active'){
        hamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
}
else{
    hamburger.classList.add('active');
    hamburgerMenu.classList.add('active');
}
}

hamburger.addEventListener('click', addActive);