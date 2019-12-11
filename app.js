
function init(){
    var usd, euro;

 usd = document.getElementById("MoneyInput");
 euro = document.getElementById("euro");

 usd.addEventListener('input', function(e){
    var usdAmount, usdToEuro;

    usdAmount = e.target.value;
    usdToEuro = usdAmount * 0.891407;

    console.log(usdAmount, usdToEuro);

    document.getElementById("euro").innerHTML = usdToEuro;
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