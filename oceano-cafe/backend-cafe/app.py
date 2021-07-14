from flask import Flask, request
app = Flask(__name__)
import database
import sqlite3
import json


# conn = sqlite3.connect('database.db')
# c = conn.cursor()

@app.route("/")
def hello():
    return "Hello World"

@app.route("/products", methods=['GET'])
def products():
    '''List all products'''
    conn = database.conn()
    c = conn.cursor()
    with conn:
        data = c.execute("SELECT * FROM products")
        data = data.fetchall()
        return app.response_class(response=json.dumps(data), mimetype='application/json')

@app.route("/orders", methods=['GET'])
def get_orders():
    '''List active orders'''
    conn = database.conn()
    c = conn.cursor()
    with conn:
        data = c.execute("SELECT * FROM orders WHERE active=1")
        data = data.fetchall()
        return app.response_class(response=json.dumps(data), mimetype='application/json')

@app.route("/orders", methods=['POST'])
def post_orders():
    '''create new order'''
    first = request.form.get('first')
    last = request.form.get('last')
    street = request.form.get('street')
    number = request.form.get('number')
    more = request.form.get('more')
    bairro = request.form.get('bairro')
    cep = request.form.get('cep')
    product = request.form.get('product')
    quantity = request.form.get('quantity')

    conn = database.conn()
    c = conn.cursor()
    with conn:
        c.execute("INSERT INTO orders VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)", 
                    (first, last, street, number, more, bairro, cep, product, quantity))
        conn.commit()
        # data = c.execute("SELECT * FROM orders WHERE active=1")
        # data = data.fetchall()
        data = 'OK'
        return app.response_class(response=json.dumps(data), mimetype='application/json')

if __name__ == "__main__":
    app.run()
