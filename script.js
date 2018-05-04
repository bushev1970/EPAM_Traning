// parent
function Parent(name) {
    Parent.prototype.name = name;
};
Parent.prototype.educated = function () {
    if (this.__proto__.__proto__.name) {
        console.log(this.__proto__.__proto__.name + ' educated ' + this.name);
    } else {
        console.log(this.name + ' educated child');
    }
}

// father
function Father(name) {
    this.name = name;
};
Father.prototype = Object.create(Parent.prototype);
Father.prototype.beaten = function () {
    if (this.__proto__.__proto__.name) {
        console.log(this.__proto__.__proto__.name + ' beated ' + this.name);
    } else {
        console.log(this.name + ' beated child');
    }
};


// mother
function Mother(name) {
    this.name = name;
};
Mother.prototype = Object.create(Parent.prototype);
Mother.prototype.created = function () {
    if (this.__proto__.constructor.name) {
        console.log(this.__proto__.constructor.name + ' create ' + this.name);
    } else {
        console.log(this.name + ' create child');
    }
};
Mother.prototype.constructor = Mother;


// child
function Child(name) {
    this.name = name;
};
Child.prototype = Object.create(Mother.prototype);
Child.prototype.growing = function () {
    console.log(this.name + ' grow');
};



//
var parent = new Parent('Alex');
var father = new Father('Bob');
var mother = new Mother('Fransin');
var child = new Child('Martin');

//
father.educated();
mother.educated();
child.growing();
child.created();