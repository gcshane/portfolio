let i = 0;
let j = 0;
let txt = [" Software Engineer", " Full-Stack Developer"];
let forward = true
let target = document.getElementById("engineer");

function typeWriter() {

    if (i == txt[j].length && forward) {
        forward = false;
    }
    else if (i == 0 && ! forward) {
        forward = true;
        j = j ^ 1;
    }

    if (forward) {
        target.innerHTML += txt[j].charAt(i);
        i++;
    }
    else {
        target.innerHTML = target.innerHTML.slice(0, -1);
        i--;
    }
    if (i == txt[j].length) {
        setTimeout(typeWriter, 1500);
    }
    else {
        setTimeout(typeWriter, 150);
    }

}
