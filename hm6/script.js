//pop-ap
const open = document.getElementById('open');
const close = document.getElementById('close');
const block = document.getElementById('block');

close.addEventListener('click', function () {
    block.style.display = 'none';
});
open.addEventListener('click', function () {
    block.style.display = 'block';
});

// filter
var obj1 = {
    name: 'Jewels of Nizam',
    autor: 'by Geeta devi',
    price: 'Free'
};
var obj2 = {
    name: 'Cakes & Bakes',
    autor: 'by Sanjeev Kappor'
};
var obj3 = {
    name: 'Jame\'s Kitchen',
    autor: 'by Jamie Oliver',
};
var obj4 = {
    name: 'Inexpensive Family Meals',
    autor: 'by Simon hoist'
};
var obj5 = {
    name: 'Poleo Slow Cooking',
    autor: 'by Chissy Gower'
};
var obj6 = {
    name: 'Cook like an Italian',
    autor: 'by Todie Puttock',
};
var obj7 = {
    name: 'Suneeta Vaswani',
    autor: 'by Geeta Devi'
};
var obj8 = {
    name: 'Jamie Does',
    autor: 'by Jamie Oliver',
    price: 'Free'
};
var obj9 = {
    name: 'Jamie\'s Italy',
    autor: 'by Jamie Oliver',
    price: 'Free'
}
var obj10 = {
    name: 'Vegetables CookBook',
    autor: 'by Matthew Biggs',
}
const filterArr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];
const search = document.getElementById('search-input');
const button = document.getElementById('search-button');
const names = document.getElementsByClassName('wrapper__name');
const autors = document.getElementsByClassName('wrapper__autor');
const all = document.getElementById('all');
const recent = document.getElementById('recent');
const most = document.getElementById('most');
const free = document.getElementById('free');
const wrapper = document.getElementById('wrapper');
const mostCount = document.getElementsByClassName('count');
var newArr= [];

search.addEventListener("input", function(e){
    var val = e.target.value.toLowerCase();

    for(var i = 0; i< filterArr.length; i++){
        for (const key in filterArr[i]) {
            var newArrEl = filterArr[i][key];
            newArr.push(newArrEl);
        }
    }   
});
button.addEventListener('click', innerBlock);

function innerBlock(){
    var val = search.value.toLowerCase();
    filtered = newArr.filter(function (item) {
        return item.toLowerCase().indexOf(val) !== -1;
    });
    
    [...names].forEach(function (el){
        if (filtered.indexOf(el.textContent) !== -1 || filtered.indexOf(el.nextElementSibling.textContent) !== -1){       
            el.parentNode.style.display = 'block';
        } else if(search.value == ''){
            el.parentNode.style.display = 'block';
        } else {
            el.parentNode.style.display = 'none'; 
        }
    });
};
function del() {
    [...names].forEach(function (el) {
        el.parentNode.style.display = 'none';
    })
};
//all
all.addEventListener('click', function(){
    [...names].forEach(function(el){
        el.parentNode.style.display = 'block';
    })
})

// most recent
recent.addEventListener('click', function(){
    del();
   for(var i = names.length - 5; i < names.length; i++){
       names[i].parentNode.style.display = 'block';
   }
});

// most
most.addEventListener('click', function(){
    del();
    for (const key in mostCount) {
        var count = 0;
        if (mostCount[key].children !== undefined){
            function popular() {
                [...mostCount[key].children].forEach(function (num) {
                    var number = num.getAttribute('data-number');
                    count += +number;
                    var mostPopular = num.parentNode.setAttribute('data-popular', count);
                });
            };
            popular();
        };
    };
    f();
});
 function f(){
     var ar = [];
     var newar = [];
    for(var i = 0; i< mostCount.length; i++){
        ar.push(+mostCount[i].getAttribute('data-popular'));
    };
    function f2(){
        for (var i = 0; i < ar.length; i++) {
            if (ar[i] == Math.max.apply(Math, ar)) {
                newar.push(ar[i]);
                ar.splice(i, 1);
            }
        };
        if (ar[0] !== undefined) {
            f2();
        };
    };
     f2();    
    for(var i =0; i< newar.length; i++){
        [...mostCount].forEach(function(el){
            if (5 == +el.getAttribute('data-popular')){
                el.parentNode.style.display = 'block';
            };
        });
    };
 };

// free
free.addEventListener('click', function(){
    del();
    filterArr.forEach(function (el) {
        if (el.price !== undefined) {
            var filtered_2 = [...names].filter(function (name) {
                return name.textContent == el.name;
            });
            if (filtered_2 !== undefined) {
                filtered_2[0].parentNode.style.display = 'block';
            }
        };
    });
});