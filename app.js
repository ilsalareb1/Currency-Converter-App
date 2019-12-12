
function init(){
    var usd, euro, jpy, chf, cad, gbp, inr;

 usd = document.getElementById("MoneyInput");
 euro = document.getElementById("euro");
 jpy = document.getElementById("jpy");
 chf = document.getElementById("chf");
 cad = document.getElementById("cad");
 gbp = document.getElementById("gbp");
 inr = document.getElementById("inr");

 usd.addEventListener('input', function(e){
    var usdAmount, usdToEuro, usdToJPY, usdToCHF, usdToCAD, usdToGBP, usdToINR;

    usdAmount = e.target.value;
    usdToEuro = (usdAmount * 0.90).toFixed(2);
    usdToJPY = (usdAmount * 108.64).toFixed(2);
    usdToCHF = (usdAmount * .99).toFixed(2);
    usdToCAD = (usdAmount * 1.32).toFixed(2);
    usdToGBP = (usdAmount * .76).toFixed(2);
    usdToINR = (usdAmount * 70.74).toFixed(2);

    console.log(usdAmount, usdToEuro);

    document.getElementById("euro").innerHTML = "&#8364; " + usdToEuro;
    document.getElementById("jpy").innerHTML = "&#xa5; " + usdToJPY;
    document.getElementById("chf").innerHTML = "&#x20A3; " + usdToCHF;
    document.getElementById("cad").innerHTML = "&#xFF04; " + usdToCAD;
    document.getElementById("gbp").innerHTML = "&#xa3; " + usdToGBP;
    document.getElementById("inr").innerHTML = "&#x20B9;" + usdToINR;
   });
}

init();
/* var usd, euro;

usd = document.getElementById("MoneyInput");
euro = document.getElementById("euro");

usd.addEventListener('input', function(e){
    var usdAmount, usdToEuro;

    usdAmount = e.target.value;
    usdToEuro = usdAmount * 0.891407;

    console.log(usdAmount, usdToEuro);

    document.getElementById("euro").innerHTML = usdToEuro;


}); */