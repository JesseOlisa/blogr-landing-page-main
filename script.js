/*VARIABLE DECLARATIONS*/

const hamContainer = document.querySelector('.ham-container');
const hamBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-navbar');

//EVENT LISTENER
hamContainer.addEventListener('click', ()=>{
    if(hamBtn.style.display === 'block') {
        hamBtn.style.display = 'none';
        closeBtn.style.display = 'block';
        mobileNav.style.display = 'block';
    }
    else {
        hamBtn.style.display = 'block';
        closeBtn.style.display = 'none';
        mobileNav.style.display = 'none';
    };
});

