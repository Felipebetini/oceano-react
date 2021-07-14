import sqlite3

conn = sqlite3.connect('database.db')
# Create a cursor
c = conn.cursor()
# OR
with conn:
    c.execute("""CREATE TABLE products (
        id integer PRIMARY KEY AUTOINCREMENT,
        product text,
        price real,
        quantity integer
        )""")
    
    c.execute("INSERT INTO products VALUES (null, 'Catuai vermelho', 25, 100)")
    c.execute("INSERT INTO products VALUES (null, 'Catuai amarelo', 30, 100)")
    c.execute("INSERT INTO products VALUES (null, 'Mundo Novo', 20, 100)")
    
    c.execute("""CREATE TABLE orders (
        id integer PRIMARY KEY AUTOINCREMENT,
        first text,
        last text,
        street text,
        number integer,
        more text,
        bairro text,
        cep text,
        product integer,
        quantity integer,
        active integer
        )""")
    c.execute("INSERT INTO orders VALUES (null, 'eduardo', 'surname', 'Rua A', 10, '', 'Córrego', '88020-000',1, 5, 1)")
    c.execute("INSERT INTO orders VALUES (null, 'edu', 'surname', 'Rua A', 10, '', 'Córrego', '88020-000',2, 3, 0)")
    c.execute("INSERT INTO orders VALUES (null, 'lalala', 'surname', 'Rua A', 10, '', 'Córrego', '88020-000',3, 10, 1)")

    conn.commit()
