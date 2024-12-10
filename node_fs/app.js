// const ejs = require('ejs');
// const fs = require('fs');
// const express = require('express');

// const app = express();
// app.set('view engine', 'ejs');

// let storedata = [];
// let data = fs.readFileSync('data.json', 'utf-8');
// let edit = null
// let editdata = null
// if (data != '') 
// {
//     console.log(JSON.parse(data));
//     storedata = JSON.parse(data);
// }

// app.get('/', (req, res) => 
// {
//     res.render('index', { data: storedata, editdata, edit });
// });

// app.get('/createdata', (req, res) => 
// {

//     const data1 = req.query;

//     if (edit != null) 
//     {
//         storedata[edit] = data1;
//         editdata = null
//     }
//     else 
//     {
//         storedata.push(data1)
//     }

//     fs.writeFileSync('data.json', JSON.stringify(storedata))
//     res.redirect('/')
// })
// app.get('/deletedata', (req, res) =>
// {
//     const delet = req.query.delete;
//     storedata.splice(delet, 1)
//     console.log(delet);
//     fs.writeFileSync('data.json', JSON.stringify(storedata))
//     res.redirect('/');
// })

// app.get('/editdata', (req, res) => 
// {
//     edit = req.query.edite
//     editdata = storedata[edit]
//     console.log(editdata);
//     res.render('index', { editdata, data: storedata, edit })
// })

// app.listen(4001)
const fs = require('fs');
const express = require('express');
const ejs = require('ejs');

const app = express();


app.set('view engine', 'ejs');

var storedata = [];
var data = fs.readFileSync('data.json', 'utf-8');
var edit = null
var editdata = null
if (data != '') {
    console.log(JSON.parse(data));
    storedata = JSON.parse(data);
}

app.get('/', (req, res) => {
    res.render('index', { data: storedata, editdata,edit });
});

app.get('/createdata', (req, res) => {
console.log(req.query);

    const data1 = req.query;

    if (edit != null) 
    {
        storedata[edit] = data1;
        editdata = null
    }
    else {

        storedata.push(data1)
    }

    fs.writeFileSync('data.json', JSON.stringify(storedata))
    res.redirect('/')
})
app.get('/deletedata', (req, res) => {
    const delet = req.query.delete;
    storedata.splice(delet, 1)
    console.log(delet);
    fs.writeFileSync('data.json', JSON.stringify(storedata))
    res.redirect('/');
})

app.get('/editdata', (req, res) => {
    edit = req.query.edite
    editdata = storedata[edit]
    console.log(editdata);

    res.render('index', { editdata, data: storedata,edit })

})


app.listen(4001)
