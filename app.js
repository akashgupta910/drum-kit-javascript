window.addEventListener('keypress', function (event) {
    switch (event.key) {
        case "a":
        case "A":
            PlaySound("a");
            break;

        case "s":
        case "S":
            PlaySound("s");
            break;

        case "d":
        case "D":
            PlaySound("d");
            break;

        case "f":
        case "F":
            PlaySound("f");
            break;

        case "g":
        case "G":
            PlaySound("g");
            break;

        case "h":
        case "H":
            PlaySound("h");
            break;

        case "j":
        case "J":
            PlaySound("j");
            break;

        case "k":
        case "K":
            PlaySound("k");
            break;

        case "l":
        case "L":
            PlaySound("l");
            break;
    }
});

function PlaySound(code) {
    let sound = document.querySelector("." + code);
    sound.currentTime = 0;
    sound.play();
    document.getElementById(code).style.border = "1px solid #EA7773";
    stateChange(code);
}

function stateChange(code) {
    setTimeout(function () {
        document.getElementById(code).style.border = "none";
    }, 200);
}
