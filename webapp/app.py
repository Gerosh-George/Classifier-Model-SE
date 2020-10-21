from flask import Flask, render_template, request, Response, jsonify
from werkzeug.utils import secure_filename

import sys
import os
sys.path.insert(0, f'{os.path.dirname(os.getcwd())}\model')

from model.predict import predict_model

import jinja2

template_dir=os.path.join(os.path.dirname(__file__),'templates')
jinja_env=jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir),autoescape=True)


app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html')



app.config['uploads']=os.path.join(os.path.dirname(os.path.dirname(__file__)),'uploads')


@app.route("/upload", methods=['POST'])
def upload():
    
    response={
        'status' : "fail",
        'path' : ''
    }
    
    if request.method=='POST':
        if request.files:            
            image= request.files['file']     
            filename=secure_filename(image.filename)
            img_path=os.path.join(app.config['uploads'],filename)
            print(img_path)
            image.save(img_path) 
            
            prediction=predict_model(img_path)
            
            
            response={
                'status' : "success",
                'prediction' : prediction
            }    
            
    return jsonify(response)
    

if __name__ == "__main__":
    app.run(debug=True)



#$env:FLASK_APP = "webapp\app.py"