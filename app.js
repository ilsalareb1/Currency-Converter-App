const DOMstrings = {
    AmountCurrentCurrency: document.getElementById("amount"),
    displayWantedCurrency: document.getElementsByClassName(".display-name-wc"),
    displayConvertedAmount: document.getElementsByClassName(".display-amount-wc"),
    type: document.querySelector(".type"),
    input: document.getElementById("currency-form")
};

DOMstrings.input.addEventListener("keypress", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.querySelector(".nes-btn").click();
    }
});

function init(){
    document.getElementById("currency-form").addEventListener("sumbit", async function(e){
        e.preventDefault();
        DOMstrings.displayWantedCurrency.innerText = 'test';
        const ExchangeRates = await fetch (`http://data.fixer.io/api/latest?=access_key=aa7cbda9baeeeda7532c0f97afaafdc6&symbols=USD,AUD,CAD,PLN,MXN`);
        await ExchangeRates.json(); 
        calculateConvertedAmount(AmountCurrentCurrency){
            ExchangeRates * AmountCurrentCurrency;
        }
        try {
            const displayWantedCurrency = function (data) {
              DOMstrings.displayWantedCurrency.innerText = data.name;
              DOMstrings.displayConvertedAmount.innerText = data.id;
              DOMstrings.type.textContent = data.types.map(data => data.type.name);    
            };
            displayWantedCurrency(data);
            document.querySelector("#CurrentCurrency").value = "";  
        }catch (error){
            console.log(error);
            DOMstrings.type.textContent = 'Error Please try again';
        }
    });
    
}

init();