function calculateSimpleInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value) / 100;
    var time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    var data = {
        'principal': principal,
        'rate': rate,
        'time': time
    };

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = 'Simple Interest: Rs:' + data.simple_interest.toFixed(2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
