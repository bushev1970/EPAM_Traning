var Calculator = function () {
    this.val = 0;

    this.add = function (num) {
        this.val += num;
        return this;
    };
    this.substarct = function(num){
        this.val -= num;
        return this;
    };
    this.multiply = function(num){
        this.val *= num;
        return this;
    };
    this.divide = function(num){
        this.val /= num;
        return this;
    };
    this.get = function(){
        setTimeout(function () {
            return this.val;
        }.bind(this), 500);
        return this.val;
    }
};

var obj = new Calculator();
console.log(obj.add(3).multiply(16).divide(1.5).substarct(5).get());

