'use strict';

{
    // loading
    // window.onload = () => {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('body').classList.add('display');
        }, 2000);
    });

    // hamburger-menu
    document.querySelector('.hamburger-menu').addEventListener('click', () => {
        document.querySelector('.container').classList.toggle('change');
    });


    // scroll-top
    // document.querySelector('.scroll-btn').addEventListener('click', () => {
    //     document.querySelector('html').style.scrollBehavior = 'smooth';
    //     setTimeout(() => {
    //         document.querySelector('html').style.scrollBehavior = 'unset';
    //     }, 1000);
    // });
}
