const express = require('express');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'register',
    port: 3307  
});

con.connect((err) => {
    if (!err) {
        console.log("Connected to MySQL");
    } else {
        console.log(err);
    }
});

// Routes
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const qry = `SELECT * FROM crud`;
    con.query(qry, (error, result) => {
        if (error) throw error;
        res.render('form', { result, editData: null });
    });
});

app.get('/createData', (req, res) => {
    const data = req.query;

    if (data.id !== '') {
        var qry = `UPDATE crud SET name='${data.name}', surname='${data.surname}', gender='${data.gender}', hobby='${data.hobby}', city='${data.city}', image='${data.image}' WHERE id=${data.id}`;
    } else {
        var qry = `INSERT INTO crud (name, surname, gender, hobby, city, image) VALUES ('${data.name}', '${data.surname}', '${data.gender}', '${data.hobby}', '${data.city}', '${data.image}')`;
    }

    con.query(qry, (error) => {
        if (error) throw error;
        console.log("Success");
        res.redirect('/');
    });
});

app.get('/deleteData', (req, res) => {
    const deleteId = req.query.delete;
    var query = `DELETE FROM crud WHERE id=${deleteId}`;

    con.query(query, (err) => {
        if (err) throw err;
        console.log("Delete success");
        res.redirect('/');
    });
});

app.get('/editData/:id', (req, res) => {
    const editId = req.params.id;

    const qry = `SELECT * FROM crud WHERE id=${editId}`;
    con.query(qry, (error, editResult) => {
        if (error) throw error;

        const allDataQry = `SELECT * FROM crud`;
        con.query(allDataQry, (error, allResult) => {
            if (error) throw error;
            res.render('form', { editData: editResult[0], result: allResult });
        });
    });
});

app.listen(1113)
