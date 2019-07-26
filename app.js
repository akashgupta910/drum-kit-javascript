window.addEventListener('keypress', function (event) {
    switch (event.key) {
        case "a":
        case "A":
            document.querySelector(".a").play();
            document.getElementById("a").style.border = "1px solid #EA7773";
            stateChange("a");
            break;

        case "s":
        case "S":
            document.querySelector(".s").play();
            document.getElementById("s").style.border = "1px solid #EA7773";
            stateChange("s");
            break;

        case "d":
        case "D":
            document.querySelector(".d").play();
            document.getElementById("d").style.border = "1px solid #EA7773";
            stateChange("d");
            break;

        case "f":
        case "F":
            document.querySelector(".f").play();
            document.getElementById("f").style.border = "1px solid #EA7773";
            stateChange("f");
            break;

        case "g":
        case "G":
            document.querySelector(".g").play();
            document.getElementById("g").style.border = "1px solid #EA7773";
            stateChange("g");
            break;

        case "h":
        case "H":
            document.querySelector(".h").play();
            document.getElementById("h").style.border = "1px solid #EA7773";
            stateChange("h");
            break;

        case "j":
        case "J":
            document.querySelector(".j").play();
            document.getElementById("j").style.border = "1px solid #EA7773";
            stateChange("j");
            break;

        case "k":
        case "K":
            document.querySelector(".k").play();
            document.getElementById("k").style.border = "1px solid #EA7773";
            stateChange("k");
            break;

        case "l":
        case "L":
            document.querySelector(".l").play();
            document.getElementById("l").style.border = "1px solid #EA7773";
            stateChange("l");
            break;
    }
});

function stateChange(code) {
    setTimeout(function () {
        document.getElementById(code).style.border = "none";
    }, 200);
}