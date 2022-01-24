module.exports = function toReadable (number) {
let ones = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let teens =  ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '' ,'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number === 0) {
    number = 'zero';
    }else {
    if (number < 10){
        number = ones[number];
    }
    if (number >= 10 && number < 20){
        number = teens[number -10];
    }
    if (number < 100) {
    number % 10  === 0 ? number = tens[Math.floor(number / 10)]:number = tens[Math.floor(number / 10)] + toREadable(number % 10)
    }
    if (number < 1000) {
        number % 100 === 0 ? number = ones[Math.floor(number / 100)] + ' ' + 'hundred': number = ones[Math.floor(number / 100)] + ' ' + 'hundred ' + toREadable(number % 100)
    }
    } 
    
return number;
}
