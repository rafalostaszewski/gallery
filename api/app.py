from urllib import response
import requests
from flask import Flask, request

UNSPLASH_URL='https://api.unsplash.com/photos/random'
UNSPLASH_KEY='Km63AEhhfAMPS4gtH5SMiSX9Gshl5AxOKmooHWy0NIw'

app = Flask(__name__)

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }

    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data


if __name__ == "__main__":
    app.run("0.0.0.0", port=5050)