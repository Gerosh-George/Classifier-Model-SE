# Classifier-Model-SE
## Steps to download the project files:

(For git commands to work git should be installed and python version 3.5 - 3.8... also pip should be installed if not present with python installation files)

Run the following command in cmd, a folder with name 'Face-Mask-Detection-Webapp' will be created:
- git clone https://github.com/Gerosh-George/Face-Mask-Detetction-Webapp.git <br>
(or you can also download the zip file and extract it.) <br>

Open the folder that is cloned in VsCode.

In terminal of vscode type following commmands: <br>
Create virtual environment. Run the app only in venv.
- python -m venv venv
- venv\Scripts\activate <br>
(virtual environment will get activated)

- pip install -r requirements.txt

- $env:FLASK_APP = "webapp\app.py" in vscode terminal (powershell) <br>
  [or set FLASK_APP = "webapp\app.py" in cmd]

- flask run 

If you did everything right then the server link will be shown in terminal, click it and the app will run in the browser.

If you are not using vscode then run the following commands in your editor's terminal or cmd. Ensure that your cmd prompt is opened in project folder. (the path should of the project folder) 


## Result Screenshots:

![download_2_predicted](https://user-images.githubusercontent.com/62696039/98636754-79550100-234d-11eb-8013-d8b6bc6744fc.jpg)

![download_3_predicted](https://user-images.githubusercontent.com/62696039/98637954-309e4780-234f-11eb-853a-44b646773d33.jpg)

#### The flask web app will look like this:-
![image](https://user-images.githubusercontent.com/62696039/98637287-43644c80-234e-11eb-94be-8dccb59de41d.png)

![image](https://user-images.githubusercontent.com/62696039/98637403-62fb7500-234e-11eb-92fa-128e22ab5f70.png)

![image](https://user-images.githubusercontent.com/62696039/98637494-79093580-234e-11eb-8989-a16c815b5386.png)

![image](https://user-images.githubusercontent.com/62696039/98637564-8d4d3280-234e-11eb-9f7e-e2b13aef8aa5.png)



<h6>Note: Tensorflow library  package version included in requirements.txt is the TF2 version which comes with gpu related files so some warning might be shown related to it. </h6>



