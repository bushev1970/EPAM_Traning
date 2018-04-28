var ad = document.querySelector('#block');

function foo(e) {
    var target = e.target;
    if (target.tagName == 'H3') {
        for (var i = 0; i < ad.children.length; i++) {
            ad.children[i].lastElementChild.style.display = 'none';
        }
        target.nextElementSibling.style.display = 'block';
    }
}
ad.addEventListener('click', foo);