from flask import Flask
from flask import send_file
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/")
def index():
        return "Hello World"

@app.route("/all")
def Buche():
        return send_file("CommitA.json")
if __name__ == "__main__":
        app.run()
