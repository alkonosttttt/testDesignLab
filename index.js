// active class of menu items onscroll
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
            document.querySelectorAll('.nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });

            document.querySelectorAll('.nav a')[i].classList.add('active');
        }
    });
});





//Form validation


"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error===0){

        }else {
            document.getElementsByClassName('form_name')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_phone')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_email')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_wishes')[0].placeholder = 'Пожалуйста, заполните это поле';



        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    formAddErrorRed(input);
                    error++;

                }
            }
            else {
                if (input.value === '') {
                    formAddError(input);
                    formAddErrorRed(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function formAddErrorRed(input) {
        input.parentElement.classList.add('_red');
        input.classList.add('_red');
    }

});



//Добавить файл

// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area")

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
    document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}

function highlight(e) {
    dropArea.classList.add('highlight')
}

function unhighlight(e) {
    dropArea.classList.remove('active')
}

function handleDrop(e) {
    var dt = e.dataTransfer
    var files = dt.files

    handleFiles(files)
}



function handleFiles(files) {
    files = [...files]

    files.forEach(previewFile)
}

function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        document.getElementById('sendFile-gallery').appendChild(img)
    }
}

document.querySelector('.sendFile-clean').addEventListener('click', function(){
    console.log(fileElem.value)
    fileElem.value = ""
    console.log(fileElem.value)
    document.querySelector('#sendFile-gallery').innerHTML = ''
})





//показать и скрыть пароль
function show_hide_password(target){
    let input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}


