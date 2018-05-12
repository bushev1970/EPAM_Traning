window.onload = function(){

    function time(f) { var timerId;

        return function (...args) {
            var onComplete = function () {
                f.apply(this, args);
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
