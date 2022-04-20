
do{
    userNumber= prompt("Inserire un numero di 4 cifre");
}while(isNaN(parseInt(userNumber)) || (userNumber.length !== 4));

let sum=0 ;

for (let i=0; i<userNumber.length;i++) {
    sum += parseInt(userNumber[i]);
}

console.log("somma",sum);