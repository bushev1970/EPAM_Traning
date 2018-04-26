const button = document.getElementById('down');
const block = document.getElementById('block');
button.addEventListener('click', newEl);

function newEl(){
    var div = document.createElement('div');
    div.setAttribute('class', 'vis');

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        return rand;
    }
    div.style.width = randomInteger(0, 300) + 'px';
    div.style.left = randomInteger(0, 900) + 'px';
    div.style.top = randomInteger(0, 600) + 'px';
    div.style.position = 'absolute';
    div.style.height = randomInteger(0, 300) + 'px';
    div.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    block.appendChild(div);
};

block.onmousedown = function (e) {
    var tar = e.target;
    tar.style.position = 'absolute';
    moveAt(e);
    function moveAt (e){
        tar.style.left = e.pageX - tar.offsetWidth /2 + 'px';
        tar.style.top = e.pageY - tar.offsetHeight /2 + 'px';
    };
    tar.onmousemove = function(e){
        moveAt(e);
    };
    tar.onmouseup = function () {
        tar.onmousemove = null;
        tar.onmouseup = null;
    }
};