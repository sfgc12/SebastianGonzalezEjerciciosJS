document.getElementById('calculateBtn').addEventListener('click', function() {

    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Por favor, ingrese valores válidos para altura y peso.');
        return;
    }
    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    document.getElementById('bmiResult').value = bmi;
});
