"""
An example how a very minimal Flask blog using TinyMongo (as an local database) and Summernote (as visual control).

Note: I include verbose comments for people that are using this code as tutorial.

This is meant not to be a serious tool, but has minimal functionality to demonstrate how a larger blog could leverage
these particular tools into a bigger project.  Note that there is NO login or userid, etc. If you want that, then
I suggest using the package Flask-Login (simple implementation) or for a more comprehesive application, Flask-Security.

The blog has 4 routes:
1. '/' is the index of all pages
2. '/view/<id>' shows a page with a particular id (this is the actual MongoDB id of the object)
3. '/edit' and '/edit/<id>' if no id is supplied, a new page is created.  if a valid id is presented, edit the page
4. '/delete/<id>' delete a page with a particular ID.

Flask: http://flask.pocoo.org/

A very comprehensive, robust microframework

TinyMongo: https://github.com/schapman1974/tinymongo

A PyMongo-like wrapper of tinyDB.  It is trivial to port TinyMongo to full-fledged MongoDB.

SummerNote: https://summernote.org/

Summernote is a fairly lightweight and fast WYSYWIG web control that has a Content Delivery Network implementation.
"""

import datetime
import string
from flask import Flask, request, render_template, session, redirect, url_for, flash, jsonify
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, IntegerField, DateTimeField
from wtforms.validators import DataRequired,Regexp,IPAddress,Length,Required,InputRequired
from wtforms.validators import Email ,Regexp, EqualTo, NumberRange, NoneOf, URL, AnyOf 
#List of available validators : http://wtforms.simplecodes.com/docs/0.6.1/validators.html
from flask_sqlalchemy import SQLAlchemy
from random import choice
import locale
import time
import pdb
import json 
from flask_debugtoolbar import DebugToolbarExtension
import os 
import uuid

    
app = Flask(__name__)
#DB = TinyMongoClient().blog


app.debug = True
app.config['SECRET_KEY'] = 'hard to guess string'
#app.config['SQLALCHEMY_DATABASE_URI'] ='mysql://MissPandinou:clairePapa2021@MissPandinou.mysql.eu.pythonanywhere-services.com/MissPandinou$missPandinou'

app.config['SQLALCHEMY_DATABASE_URI'] ='mysql+mysqlconnector://root:root@localhost/relation_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_RECORD_QUERIES'] = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

bootstrap = Bootstrap(app)
db = SQLAlchemy(app)
toolbar = DebugToolbarExtension(app)





            
@app.route('/')
def index():
    """return all the pages to a user view"""
    return render_template('page_list.html')

@app.route('/page1', methods=['GET','POST'])
def page1():          
    return render_template('page1.html')

@app.route('/page2', methods=['GET','POST'])
def page2():        
    return render_template('page2.html')


@app.errorhandler(404)
def page_not_found(e):
    """404 error handler-- 404 status set explicitly"""
    return render_template('404.html'), 404
