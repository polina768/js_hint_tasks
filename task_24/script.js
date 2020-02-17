// task 1 --------------------

let out1 = document.querySelector(".out-1");
document.querySelector(".b-1").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out1.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out1.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=1", true);
    xhr.send();
};

// task 2 --------------------
let out2 = document.querySelector(".out-2");
document.querySelector(".b-2").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out2.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out2.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=2&name=PS", true);
    xhr.send();
};

// task 3 --------------------
let out3 = document.querySelector(".out-3");
document.querySelector(".b-3").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out3.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out3.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=3&num2=44", true);
    xhr.send();
};

// task 4 --------------------
let out4 = document.querySelector(".out-4");
document.querySelector(".b-4").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out4.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out4.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=3&num2=44", true);
    xhr.send();
};

// task 5 --------------------
let out5 = document.querySelector(".out-5");
document.querySelector(".b-5").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out5.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out5.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=5", true);
    xhr.send();
};



// task 6 --------------------
let out6 = document.querySelector(".out-6");
document.querySelector(".b-6").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out6.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out6.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=3&num2=44", true);
    xhr.send();
};

// task 7 --------------------
let out7 = document.querySelector(".out-7");
document.querySelector(".b-7").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out7.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out7.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=7", true);
    xhr.send();
};


// task 8 --------------------
let out8 = document.querySelector(".out-8");
document.querySelector(".b-8").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out8.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out8.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1994", true);
    xhr.send();
};


// task 9 --------------------
let out9 = document.querySelector(".out-9");
document.querySelector(".b-9").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out9.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out9.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1", true);
    xhr.send();
};

// task 10 --------------------
let out10 = document.querySelector(".out-10");
document.querySelector(".b-10").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out10.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out10.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("GET", "http://localhost:9999/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Poli", true);
    xhr.send();
};
// task 11 --------------------
let out11 = document.querySelector(".out-11");
document.querySelector(".b-11").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out11.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out11.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=1");
};

// task 12 --------------------
let out12 = document.querySelector(".out-12");
document.querySelector(".b-12").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out12.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out12.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=2&name=Poli");
};
// task 13 --------------------
let out13 = document.querySelector(".out-13");
document.querySelector(".b-13").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out13.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out13.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=3&num1=66&num2=5");
};
// task 14 --------------------
let out14 = document.querySelector(".out-14");
document.querySelector(".b-14").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out14.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out14.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=4&num1=66&num2=5");
};

// task 15 --------------------
let out15 = document.querySelector(".out-15");
document.querySelector(".b-15").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out15.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out15.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=6&num1=66&num2=5");
};

// task 16 --------------------
let out16 = document.querySelector(".out-16");
document.querySelector(".b-16").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out16.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out16.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=7");
};

// task 17 --------------------
let out17 = document.querySelector(".out-17");
document.querySelector(".b-17").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out17.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out17.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=8&year=1994");
};

// task 18 --------------------
let out18 = document.querySelector(".out-18");
document.querySelector(".b-18").onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            out18.innerHTML = xhr.status;
            if (xhr.status === 200) {
                out18.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open("POST", "http://localhost:9999/index2.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1");
};