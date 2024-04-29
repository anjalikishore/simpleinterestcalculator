# simpleinterestcalculator

First, create a folder for cal project and navigate into it. Then, create the following files:
1.	simpleCalculator.py (for the Flask backend)
2.	index.html (for the HTML structure)
3.	styles.css (for the CSS styling)
4.	script.js (for the JavaScript functionality)
Here's the content for each file:
1. simpleCalculator.py:
from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    principal = float(request.form['principal'])
    rate = float(request.form['rate'])
    time = float(request.form['time'])

    # Simple Interest Calculation
    interest = (principal * rate * time) / 100

    return {'interest': interest}

if __name__ == '__main__':
    app.run(debug=True)
2. index.html:
Create a folder called templates, in side it create a index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Interest Calculator</title>
    <link rel="stylesheet" href="static/styles.css">
</head>
<body>
    <div class="container">
        <h1>Simple Interest Calculator</h1>
        <form id="interest-form">
            <div>
                <label for="principal">Principal amount:</label>
                <input type="number" id="principal" name="principal" required>
            </div>
            <div>
                <label for="rate">Interest rate (per annum %):</label>
                <input type="number" id="rate" name="rate" required>
            </div>
            <div>
                <label for="time">Time (in years):</label>
                <input type="number" id="time" name="time" required>
            </div>
            <button type="submit">Calculate</button>
        </form>
        <div id="result"></div>
    </div>

    <script src="static/script.js"></script>
</body>
</html>
3. styles.css:
Create a folder in root directory called static, in side it create a styles.css
.container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
	color: #2196F3;
}

.input-group {
    margin-bottom: 20px;
}

input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #2196F3;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2196F3;
}

#result {
    text-align: center;
    margin-top: 20px;
} 4. script.js:
In the same static folder, create a script.js
document.getElementById('interest-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'principal=' + principal + '&rate=' + rate + '&time=' + time,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Simple Interest: ' + data.interest.toFixed(2);
    })
    .catch(error => console.error('Error:', error));
});
Make sure we have Flask installed (pip install Flask). Then we can run the Flask app by executing python app.py in our terminal. Use this url http://127.0.0.1:5000/ in web browser to see the simple interest calculator in action.
