//
// window.addEventListener("storage", function (e) {
// console.log("change");
// });
// localStorage.setItem("data", 6);
// console.log(localStorage.getItem("data"));
// const a = [3,4,5];
// localStorage.setItem("a", JSON.stringify(a));
// let b = localStorage.getItem("a");
// b= JSON.parse(b);
// console.log(b);
// console.log(b[1]);
// console.log(typeof b);
//
//
// const c = {
//     hello: 5,
//     k: 2,
//     4: "hi",
// };
// localStorage.setItem("c", JSON.stringify(c));
// let d = localStorage.getItem("c");
// d= JSON.parse(d);
// console.log(d);
//
// console.log(typeof d);

// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem(5, 11);
    console.log(localStorage.getItem("5"));
}

// ваше событие здесь!!!
document.querySelector(".b-1").addEventListener("click", t1);
// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2() {
    let a2 = [7, 6, 5];
    localStorage.setItem("a2", JSON.stringify(a2));
    console.log(localStorage.getItem("a2"));
}

// ваше событие здесь!!!
document.querySelector(".b-2").addEventListener("click", t2);
// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */
let out3 = document.querySelector(".out-3");

function t3() {
    let b3 = localStorage.getItem("a2");
    b3 = JSON.parse(b3);
    b3.forEach(elem => out3.innerHTML += `a2 ${elem}<br>`);
}

// ваше событие здесь!!!
document.querySelector(".b-3").addEventListener("click", t3);

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

function t4() {
    let a4 = {hello: "world", hi: "mahai"};
    localStorage.setItem("a4", JSON.stringify(a4));
    console.log(localStorage.getItem("a4"));
}

// ваше событие здесь!!!
document.querySelector(".b-4").addEventListener("click", t4);
// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */
let out4 = document.querySelector(".out-5");

function t5() {
    let b5 = localStorage.getItem("a4");
    b5 = JSON.parse(b5);
    for (let key in b5) {
        out4.innerHTML += `${key} ${b5[key]}<br>`;
    }
}

// ваше событие здесь!!!
document.querySelector(".b-5").addEventListener("click", t5);
// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector(".b-6").addEventListener("click", t6);

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let inp7 = document.querySelector(".i-7");
let a7 = [];

function t7() {
    let inp7Value = inp7.value;
    a7.push(inp7Value);
    localStorage.setItem("a7", JSON.stringify(a7));
}

// ваше событие здесь!!!
document.querySelector(".b-7").addEventListener("click", t7);
// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let b8 = localStorage.getItem("a7");
    b8 = JSON.parse(b8);
    b8.pop();
    console.log(b8);
    localStorage.setItem("a7", JSON.stringify(b8));
}

// ваше событие здесь!!!
document.querySelector(".b-8").addEventListener("click", t8);

// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */
let rb9 = document.querySelectorAll(".form-control [name='rb-9']");

function t9() {
    let rbValue = this.value;
    localStorage.setItem("bg", rbValue);
}

// ваше событие здесь!!!
for (let elem of rb9) {
    elem.addEventListener("change", t9);
}
// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
};

function t10() {
    localStorage.setItem("card", JSON.stringify(card));
}

document.querySelector(".b-10").addEventListener("click", t10);
// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */
let out11 = document.querySelector(".out-10");

function t11() {
    let outCard = localStorage.getItem("card");
    outCard = JSON.parse(outCard);
    for (let key in outCard) {
        out11.innerHTML += `${key} ${outCard[key]}<br>`;
    }
}

// ваше событие здесь!!!
document.querySelector(".b-11").addEventListener("click", t11);
// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {

}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t13() {

}

// ваше событие здесь!!!