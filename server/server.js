const express = require('express')

const app = express()
const { loginUser,
    registerUser,
    logout,
    products,
    order,
    info,
    buy} = require('./sql/busness')
const port = 3002

app.get('/login', (req, res) => {
  res.send('Hello World!')
})


app.get('/register', (req, res) => {
    res.send('Hello World!')
  })

app.get('/info', (req, res) => {
    res.send('Hello World!')
})

app.get('/buy', (req, res) => {
    res.send('Hello World!')
})
app.get('/order',(req, res) => {
    res.send('Hello World!')
})
app.get('/product', (req, res) => {
    res.send(JSON.stringify([
        {
        name: "Телефон",
        price: 500
    }   
    ]))
})
app.get('/logout', (req, res) => {
    let {current_token}  =  req.body
    res.send(JSON.stringify([
        {
        name: "Телефон",
        price: 500
    }   
    ]))
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})