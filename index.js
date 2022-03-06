// Code your solutions in this file


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

let names = ["Guadalupe", "Ollie", "Aki"];
let event = "surprise";
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] +", for the wonderful " + event + " gift!")
    }
    return messages;
  }
let n =10;
function countDown(n){
    while (n<=10&&n>=0) {
    console.log(n);
    n--;
    }
    
}
