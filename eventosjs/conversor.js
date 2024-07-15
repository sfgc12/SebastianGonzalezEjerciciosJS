
const conversionRate = 4000;

const usdInput = document.getElementById('usd');
const copInput = document.getElementById('cop');

function convertUsdToCop() {
    const usdValue = parseFloat(usdInput.value);
    const copValue = (usdValue * conversionRate).toFixed(2);
    copInput.value = copValue;
}
function convertCopToUsd() {
    const copValue = parseFloat(copInput.value);
    const usdValue = (copValue / conversionRate).toFixed(2);
    usdInput.value = usdValue;
}
usdInput.addEventListener('input', convertUsdToCop);
copInput.addEventListener('input', convertCopToUsd);
window.addEventListener('DOMContentLoaded', convertUsdToCop);
