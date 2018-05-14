window.onload = function(){

    function time(f) { var timerId;

        return function (arguments) {
            var onComplete = function () {
                f.apply(this, arguments);
                timerId = null;
            }

            if (timerId) {
                clearTimeout(timerId);
            }

            timerId = setTimeout(onComplete, 2000);
        };
    }

    function f() { console.log('hi'); }
    var timer = time(f);

    document.getElementById('foo').addEventListener('click', timer);
};
