from flask import Flask
from flask import render_template
from flask import url_for
from jinja2 import Template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about_me')
def about_me():
    return render_template('about_me.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact_me')
def contact_me():
    return render_template('contact_me.html')

@app.route('/built_with')
def built_with():
    return render_template('built_with.html')

if __name__ == '__main__':
    app.run()
