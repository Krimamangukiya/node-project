const express = require('express')
const app = express()

app.set("view engine", "ejs")
let storeData = []
let editData = null
let editId = null
app.get('/' ,(req , res) =>{
    res.render('index' , {sdata : storeData , editData : editData})
})

app.get('/createData',(req ,res) =>{                                                            
        // console.log(req.query);
        if(editId != null)
        {
            storeData[editId] = req.query
            editId = null
            editData = null
        }
        else
        {
            storeData.push(req.query)
        }
        res.redirect('/')
})

app.get('/deleteData' , (req,res) =>{
    const deleteId = req.query.delete
    storeData.splice(deleteId ,1)
    res.redirect('/')
})

app.get('/editData' , (req,res) =>{
    editId = req.query.edit
    editData = storeData[editId]
    res.render('index' , {editData : editData ,sdata :storeData})
})
app.listen(3009)