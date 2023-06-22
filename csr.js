function getInfo(flag, classSelect) {
    console.log(flag)
    let request = new XMLHttpRequest();

    request.open("GET", flag, true);

    request.send();

    request.onload = function () {

        let post = request.response;



        document.getElementById(classSelect).innerHTML = post

    }

}

function changeD() {
    window.location = "pro.html"
}

document.getElementById("hi").style.display = "none"

function hiddens() {
    alert("Thanks For You!")
    let el = document.getElementById("hi")
    el.style.display = "none"
}

function disp() {
    let el = document.getElementById("hi")
    el.style.display = "block"
}