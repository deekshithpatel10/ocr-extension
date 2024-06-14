from flask import Flask, request, jsonify
from io import BytesIO
from PIL import Image
import pytesseract
from flask_cors import CORS 

app = Flask(__name__)

CORS(app)

@app.post("/")
def ocr():
   image_file = request.files['image']
   content = image_file.read()
   img = Image.open(BytesIO(content))
   text = pytesseract.image_to_string(img, lang='eng')
   return jsonify({"text": text})

