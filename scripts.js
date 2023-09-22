
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const correncyValueToConvert = document.querySelector(".currency-value-to-convert")
    const correncyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.9
    const euroToday = 5.9
    const libraToday = 0.16
    const bitcoinToday = 131.4

    if (currencySelect.value == "dolar") {
        correncyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        correncyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        correncyValueConverted.innerHTML = new Intl.NumberFormat("en-ke", {
            style: "currency",
            currency: "ksh"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        correncyValueConverted.innerHTML = new Intl.NumberFormat("en-ke", {
            style: "currency",
            currency: "KSH"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    correncyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"

    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"

    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"

    }
    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)













