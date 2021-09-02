from flask import Flask
from bs4 import BeautifulSoup



app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


if __name__ == "__main__":
    app.run()




def web_scrape():
    with open("index.html") as fp:
        soup= BeautifulSoup(fp,"lxml")
        
