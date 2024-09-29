/*
in alternative of onclick we can use
document.getElementById("calculate").addEventListener('click',f1);

*/

function f1() {
    const amount = parseInt(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const term = parseInt(document.getElementById("term").value);

    if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
        alert("enter all the values.....")
    }
    let interstrate = rate / 100 / 12;
    let payment = (amount * interstrate) / (1 - Math.pow(1 + interstrate, -term));
    let interstamount = (payment * term) - amount;

    const result = document.getElementById("result");
    let resultmassage = ('Monthly Payment = ' + payment.toFixed(2) + '<br>');
    resultmassage += ('Total Interest = ' + interstamount.toFixed(2));
    result.innerHTML = resultmassage;


}