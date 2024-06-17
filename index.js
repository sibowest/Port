const word = "Hello there!!!";
let index = 0;

const typeWriter = () => {
    if (index < word.length) {
        document.getElementById("write").innerHTML += word.charAt(index);
        index++;
        setTimeout(typeWriter, 300)
    }
    else {
        setTimeout(() => {
            document.getElementById("write").innerHTML = "";
            index = 0;
            typeWriter();
        }, 1500);
    }
}
window.onload = typeWriter();

// my name typeWriter
const izina = "";
let index1 = 0;

const typeWriter1 = () => {
    if (index1 < izina.length) {
        document.getElementById("cap").innerHTML += izina.charAt(index1);
        index1++;
        setTimeout(typeWriter1, 300)
    }
    else {
        setTimeout(() => {
            document.getElementById("cap").innerHTML = "";
            index1 = 0;
            typeWriter1();
        }, 1000);
    }
}
window.onload = typeWriter1();