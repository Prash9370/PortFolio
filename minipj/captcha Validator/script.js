function giverndm(a, b) {
    return Math.floor(Math.random() * b) + a;
}
function verify() {
    let capvalue = "";
    let disp = document.getElementsByClassName("digi");
    let inp = document.getElementById("Captcha");
    for (let i = 0; i < 6; i++) {
        capvalue += disp[i].innerText;
    }
    if (inp.value == capvalue) {
        document.getElementById("gif").src = "./success.gif";
        document.getElementById("msg").innerText = "You Are A Human";
    } else {
        document.getElementById("gif").src = "./fail.gif";
        document.getElementById("msg").innerText = "Try Again";
    }

}
function load(a) {
    document.getElementById("vrfbtn").style.display = "none";
    document.getElementById("loadsvg").style.display = "inline-block";
    setTimeout(a, 2000);
    setTimeout(reappear, 2000);
}
function reappear() {
    document.getElementById("vrfbtn").style.display = "inline-block";
    document.getElementById("loadsvg").style.display = "none";
}