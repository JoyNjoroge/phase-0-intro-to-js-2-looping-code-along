// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(name){
    const messages=[];
    for(let i=0; i<name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}
console.log(writeCards(names));

// Logs each number when counting down, starting from the number provided
function countDown(start){
     for (let i = start; i >= 0; i--){
        console.log(i);
    }
}
countDown(4);