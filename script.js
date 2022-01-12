'use strict';

{
    // hamburger-menu
    document.querySelector('.hamburger-menu').addEventListener('click', () => {
        document.querySelector('.container').classList.toggle('change');
    });


    // scroll-top
    document.querySelector('.scroll-btn').addEventListener('click', () => {
        document.querySelector('html').style.scrollBehavior = 'smooth';
        setTimeout(() => {
            document.querySelector('html').style.scrollBehavior = 'unset';
        }, 1000);
    });
}
