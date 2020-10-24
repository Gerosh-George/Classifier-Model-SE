# Classifier-Model-SE
## Steps to download the project files:

(For git commands to work git should be installed and python version 3.4 and above...also pip should be installed if not present with python installation files)

Run the following command in cmd a folder will be created:
- git clone https://github.com/Gerosh-George/Classifier-Model-SE.git <br>
(or you can also download the zip file and extract it.) <br>

Open the folder that is cloned in VsCode.

In terminal of vscode type following commmands:
Create virtual environment. Run the app only in venv.
- python -m venv venv
- venv\Scripts\activate <br>
(virtual environment will get activated)

- pip install -r requirements.txt

- $env:FLASK_APP = "webapp\app.py" in vscode terminal (powershell) <br>
  [or set FLASK_APP = "webapp\app.py" in cmd]

- flask run 

If you did everything right then the server link will be shown in terminal, click it and the app will run in the browser.

If you are not using vscode then run the following commands in ur editor's terminal or cmd..just ensure cmd prompt is opened in project folder. 
