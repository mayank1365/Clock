var initiate_clock = function () {
    var second_hand = document.querySelector("#second-hand");
    var minute_hand = document.querySelector("#minute-hand");
    var hour_hand = document.querySelector("#hour-hand");

    var setInitialRotation = function () {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours() % 12; // Ensure 12-hour format

        second_hand.style.transform = "rotate(" + (seconds * 6 - 90) + "deg)";
        minute_hand.style.transform = "rotate(" + (minutes * 6 - 90) + "deg)";
        hour_hand.style.transform = "rotate(" + (hours * 30 - 90) + "deg)";
    };

    var updateClock = function () {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours() % 12; // Ensure 12-hour format

        second_hand.style.transform = "rotate(" + (seconds * 6 - 90) + "deg)";
        minute_hand.style.transform = "rotate(" + (minutes * 6 - 90) + "deg)";
        hour_hand.style.transform = "rotate(" + (hours * 30 - 90) + "deg)";

        requestAnimationFrame(updateClock);
    };

    var start_clock = function () {
        setInitialRotation();
        updateClock();
    };

    start_clock();
};

initiate_clock();
