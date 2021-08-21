document.getElementById('a').innerText = "<Shaurya/>"

const texts = ['Full Stack Developer', 'Discord Bot Developer', 'UI/UX Designer', 'Youtuber', 'Gamer', 'Freelancer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200)

}());

console.log("TypeWritter effect ONLINE");
console.log("Loader Completed!");


function discordClick() {
    alert("My Discord Id is Iron Coder#6860. You can Join my Discord Server by clicking this link or pasting it in your browser: https://discord.gg/qNNaj5B4EN");
}

