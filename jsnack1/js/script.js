const firstWord = prompt("Inserire una parola");
const secondWord = prompt("Inserire una parola");

const listWord = [firstWord, secondWord];
const listResult = [];

for (let i=0; i<listWord.length-1; i++) {
    if (listWord[i].length > listWord[i+1].length){
        listResult.push(listWord[i+1],listWord[i]);
    } else if (listWord[i].length < listWord[i+1].length){
        listResult.push(listWord[i],listWord[i+1]);
    }
}

console.log(listResult);