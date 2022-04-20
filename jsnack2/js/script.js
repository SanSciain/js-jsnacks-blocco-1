
const resultList = [];

for (let i=0; i<6;i++){
    let userNumber = prompt("Inserire un numero");
    if (userNumber%2 !==0){
        resultList.push(userNumber);
    }
}

console.log(resultList);