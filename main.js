var fs = require("fs");
const clc = require('cli-color');
var readlineSync = require('readline-sync');
var text = fs.readFileSync("./palavras.txt", "utf8");
var textByLine = text.split("\n")
var palavras = [];
for (var i = 0; i < textByLine.length; i++) {
    palavras.push(textByLine[i]);
}
function sortearPalavraCom5Letras() {
    var sorteada = palavras[Math.floor(Math.random() * palavras.length)];
    while (sorteada.length != 5) {
        sorteada = palavras[Math.floor(Math.random() * palavras.length)];
    }
    return sorteada;
}
const palavra = sortearPalavraCom5Letras();
const palavraSplit = palavra.toUpperCase().split("");
function jogo(){
var InputWord = readlineSync.question('Enter a word: ');
if (palavras.includes(InputWord)) {
if (InputWord.length > 5 || InputWord.length < 5) {
    console.log(clc.red('Too long/short'));
    jogo();
}else{
    InputWord = InputWord.split('');
    for (var i = 0; i < InputWord.length; i++) {
        InputWord[i] = InputWord[i].toUpperCase();
    }
    var string = "";
    for (var i = 0; i < palavraSplit.length; i++) {
        if (palavraSplit.includes(InputWord[i])) {
            if (InputWord[i] == palavraSplit[i]) {
                string += `${clc.green(InputWord[i])}`
            }
            else {
                string += `${clc.yellow(InputWord[i])}`;
            }
        } 
        else {
            string += `${clc.red(InputWord[i])}`;
        }
    }
}
if (InputWord.join("").toUpperCase() == palavra.toUpperCase()) {
    console.log(clc.green(string));
    console.log(clc.green("You win!"));
}
else {
    console.log(string);
    jogo();
}
}else{
    console.log(clc.red("Word not found"));
    jogo();
}
}
jogo();
