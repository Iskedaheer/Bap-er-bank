document.getElementById("btn-diposit").addEventListener("click", function () {
    const dipositField = document.getElementById("diposit-field");
    const newDipositAmountstring = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountstring);


    const dipositTotalElement = document.getElementById("diposit-total");
    const previousDipositTotalstring = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalstring);

    const currentDipositTotal = previousDipositTotal + newDipositAmount;

    dipositTotalElement.innerText = currentDipositTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    dipositField.value = "";
})