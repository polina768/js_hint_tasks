// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
let w3 = 75;

function t1(evt) {
    document.querySelector(".out-1").innerHTML = evt.key;
}

// ваше событие здесь!!!
document.querySelector(".i-1").addEventListener("keypress", t1);
// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(evt) {
    document.querySelector(".out-2").innerHTML = evt.code;
}

// ваше событие здесь!!!
document.querySelector(".i-2").addEventListener("keypress", t2);

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */


function t3(evt) {
    let isNum = false;
    if (evt.keyCode < 48 || evt.keyCode > 57) {
        isNum = true;
    }
    document.querySelector(".out-3").innerHTML += isNum;
}

// ваше событие здесь!!!
document.querySelector(".i-3").addEventListener("keypress", t3);

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(evt) {
    let sign = evt.key;
    document.querySelector(".out-4").innerHTML += sign.toLowerCase();

}

// ваше событие здесь!!!
document.querySelector(".i-4").addEventListener("keypress", t4);
// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(evt) {
    let sign = evt.key;
    document.querySelector(".out-5").innerHTML += sign.toUpperCase();
}

// ваше событие здесь!!!
document.querySelector(".i-5").addEventListener("keypress", t5);
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(evt) {
    let sign = evt.keyCode;
    if (sign <= 65 || sign >= 90) {
        document.querySelector(".out-6").innerHTML += evt.key;
    }
}

// ваше событие здесь!!!

document.querySelector(".i-6").addEventListener("keypress", t6);
// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

// function t7() {
//     const a7 = [];
//
// }

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let inp8 = document.querySelector(".out-8");
function t8(evt) {
    let sign = evt.key;
    switch (sign) {
        case "i":
            inp8.innerHTML += evt.key = 1;
            break;
        case "o":
            inp8.innerHTML += evt.key = 0;
            break;
        case "l":
            inp8.innerHTML += evt.key = 7;
            break;
        default:
            inp8.innerHTML += evt.key;
    }
}

// ваше событие здесь!!!
document.querySelector(".i-8").addEventListener("keypress", t8);

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let k = 0;

function t9(evt) {
    if (evt.key === "ArrowDown") {
        k++;
    }
    document.querySelector(".out-9").innerHTML = k;
}

// ваше событие здесь!!!
document.querySelector(".i-9").addEventListener("keydown", t9);

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let img = document.querySelector(".div-10 img");
let hghtValue = +img.height;
let wdthValue = +img.width;

function t10(evt) {
    if ((evt.key == "ArrowDown") || (evt.key == "ArrowUp")) {
        document.querySelector(".div-10 img").style.height = `${hghtValue++}px`;
    }
    if ((evt.key == "ArrowLeft") || (evt.key == "ArrowRight"))
        document.querySelector(".div-10 img").style.width = `${wdthValue++}px`;
}

document.querySelector(".i-10").addEventListener("keydown", t10);
document.querySelector(".div-10 img").addEventListener("click", t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */
let btns = document.querySelectorAll(".cell");
console.log(btns);

function t11_1(evt) {
    let button = [...btns].find(elem => elem.dataset.symbol == evt.code);

    if (button) {
        button.style.backgroundColor = "gray";
    }
}

function t11_2(evt) {
    let button = [...btns].find(elem => elem.dataset.symbol == evt.code);
    if (button) {
        button.style.backgroundColor = "white";
    }
}

// ваше событие здесь!!!
document.querySelector(".i-11").addEventListener("keydown", t11_1);
document.querySelector(".i-11").addEventListener("keyup", t11_2);
