const express = require('express')
const cors = require('cors')
const products = require('./products')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/',(req, res)=>{
    res.send('welcome to get method')
})
app.get('/products',(req,res)=>{
    res.send(products)
})
app.get('/product',(req,res)=>{
    res.send(products)
})

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))