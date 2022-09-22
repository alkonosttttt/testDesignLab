//страница бани

/* Устанавливаем индекс слайда по умолчанию */
var slideIndex = 0;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > max_index) {
        slideIndex = min_index
    }
    if (n < min_index) {
        slideIndex = max_index
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
