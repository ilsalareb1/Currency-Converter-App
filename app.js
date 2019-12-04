const DOMstrings = {
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
    document.getElementById("currency-form").addEventListener("sumbit", function(e){
        e.preventDefault();
        const CurrentCurrency = document.getElementById("CurrentCurrency").value;
        fetch(`http://data.fixer.io/api/latest?=access_key=aa7cbda9baeeeda7532c0f97afaafdc6&base=USD`).then(result => {
            return result.json();
        })
    })
    
}