
function scanDOM() {
    const b = document.getElementById('b');

    var obj = {};

    for (var i = 0; i < b.children.length; i++) {

        (obj[b.children[i].tagName]) ? obj[b.children[i].tagName] += 1 : obj[b.children[i].tagName] = 1;
        (obj[b.children[i].className]) ? obj[b.children[i].className] += 1 : obj[b.children[i].className] = 1;
        (obj[b.children[i].textContent]) ? obj[b.children[i].textContent] += 1 : obj[b.children[i].textContent] = 1;


    }
    obj['Текстовый узел'] = obj['some text'];
    delete obj['some text'];
    delete obj[""];

    for (const key in obj) {
        console.log(key + " : " + obj[key]);
    };
};
scanDOM();