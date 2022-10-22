function doAddition() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    z = (+x + +y);
    elem = document.getElementById('result');
    elem.style.fontSize = '55px'
    elem.textContent = z.toString();
    
}


function doSubtraction() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    z = (+x - +y);
    elem = document.getElementById('result');
    elem.style.fontSize = '55px'
    elem.textContent = z.toString();
}

function doMultiplication() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    z = (+x * +y);
    elem = document.getElementById('result');
    elem.style.fontSize = '55px'
    elem.textContent = z.toString();
}

function doDivision() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    let fontSize;
    if (y == 0) {
        z = "You can't divide by zero";
        fontSize = '35px';
    }
    else {
        z = (+x / +y);
        fontSize = '55px';
    }
    elem = document.getElementById('result');
    elem.style.fontSize = fontSize;
    elem.textContent = z.toString();
}