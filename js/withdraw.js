document.getElementById("btn-withdeaw").addEventListener("click", function () {
    const withdeawField = document.getElementById("withdraw-field");
    const newWithdeawAmountstring = withdeawField.value;
    const newWithdeawAmount = parseFloat(newWithdeawAmountstring);

    withdeawField.value = "";

    if (isNaN(newWithdeawAmount)) {
        alert("please enter an amount")
        return;
    }

    const withdeawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdeawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdeawAmount > previousBalanceTotal) {
        alert("baap er bank e ato taka nai")
        return;
    }

    const currentWthdrawTotal = previousWithdrawTotal + newWithdeawAmount;
    withdeawTotalElement.innerText = currentWthdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdeawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    withdeawField.value = "";
})