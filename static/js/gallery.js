function selectBani() {
    document.querySelector(".bani-title").classList.add('act');
    document.querySelector(".sauni-title").classList.add('not-act');
    document.querySelector(".hamam1-title").classList.remove('act');
    document.querySelector(".hamam2-title").classList.remove('act');

    document.querySelector(".bani-images").classList.add('act-img');
    document.querySelector(".sauni-images").classList.add('not-act-img');
    document.querySelector(".hamam1-images").classList.remove('act-img');
    document.querySelector(".hamam2-images").classList.remove('act-img');
}

function selectSauni() {
    document.querySelector(".bani-title").classList.remove('act');
    document.querySelector(".sauni-title").classList.remove('not-act');
    document.querySelector(".hamam1-title").classList.remove('act');
    document.querySelector(".hamam2-title").classList.remove('act');

    document.querySelector(".bani-images").classList.remove('act-img');
    document.querySelector(".sauni-images").classList.remove('not-act-img');
    document.querySelector(".hamam1-images").classList.remove('act-img');
    document.querySelector(".hamam2-images").classList.remove('act-img');
}

function selectHamami1() {
    document.querySelector(".bani-title").classList.remove('act');
    document.querySelector(".sauni-title").classList.add('not-act');
    document.querySelector(".hamam1-title").classList.add('act');
    document.querySelector(".hamam2-title").classList.remove('act');

    document.querySelector(".bani-images").classList.remove('act-img');
    document.querySelector(".sauni-images").classList.add('not-act-img');
    document.querySelector(".hamam1-images").classList.add('act-img');
    document.querySelector(".hamam2-images").classList.remove('act-img');
}

function selectHamami2() {
    document.querySelector(".bani-title").classList.remove('act');
    document.querySelector(".sauni-title").classList.add('not-act');
    document.querySelector(".hamam1-title").classList.remove('act');
    document.querySelector(".hamam2-title").classList.add('act');

    document.querySelector(".bani-images").classList.remove('act-img');
    document.querySelector(".sauni-images").classList.remove('act-img');
    document.querySelector(".hamam1-images").classList.remove('act-img');
    document.querySelector(".hamam2-images").classList.add('act-img');

}