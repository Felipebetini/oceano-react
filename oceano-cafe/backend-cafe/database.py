import sqlite3

def conn():
    conn = sqlite3.connect('database.db') 
    return conn