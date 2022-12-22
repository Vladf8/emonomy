from flask import Flask

app = Flask(__name__)

@app.route("/get/image")
def hello_world():
    return {'path':'https://scontent.fist6-3.fna.fbcdn.net/v/t1.6435-9/53909786_2365140473510076_6070003341574799360_n.png?_nc_cat=106&ccb=1-7&_nc_sid=2c4854&_nc_ohc=lOM38r22NpkAX-eDlg_&_nc_ht=scontent.fist6-3.fna&oh=00_AfDN-8IkCvvSY6CuE0twUX9VqELtcvCmyX_FFmoG4wP9FA&oe=63C936E7'}
