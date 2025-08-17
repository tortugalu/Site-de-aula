from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/metodologia')
def metodologia():
    return render_template('metodologia.html')

if __name__ == '__main__':
    app.run(debug=True)