from flask import Flask
app=Flask(__name__)

@app.route('/')
def hello_cloud():
    return "hello Abhi Its working. Take some rest and have some Tea or snacks and Do More '_' "
app.run(host='0.0.0.0',port=8010,debug=True)