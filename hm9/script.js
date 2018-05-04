
function foo1(a,b){
    return a + b;
};
function foo2(a,b){
    return a + b;
};
function bind(context, func) {
    console.log(context)
     console.log(typeof this);
     console.log(func);
}.bind(this);
bind(foo2(2,3), foo1(1,1));