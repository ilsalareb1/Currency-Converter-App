export const DOMStrings = {
    InputCurrency : document.getElementById("CurrentCurrency"),
    InputWanted: document.getElementById("WantedCurrency"),
    InputAmount: document.getElementById("amount"),
    ConvertedAmount: document.getElementsByClassName("display-amount-wc"),
    ConvertedCurrency: document.getElementsByClassName("display-name-wc")
};

export function getCurrencyInfo (){
    DOMStrings.InputAmount.addEventListener("submit", async function (e) {
        e.preventDefault();

        if(DOMStrings.InputAmount.value == ""){
            alert("Please input all values!");
        }

        try{
            const exchangeRate = await fetch (`http://data.fixer.io/api/latest?access_key=aa7cbda9baeeeda7532c0f97afaafdc6`);
            
            DOMstrings.ConvertedAmount.value = function converter() {
                exchangeRate * DOMStrings.InputAmount.value
            };
        }

    });
}