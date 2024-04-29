from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    principal = float(data['principal'])
    rate = float(data['rate']) / 100
    time = float(data['time'])

    # Simple Interest Formula
    simple_interest = (principal * rate * time)

    return jsonify({'simple_interest': simple_interest})

if __name__ == '__main__':
    app.run(debug=True)
