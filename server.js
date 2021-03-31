
const express = require('express')
const app = express()
const port = 3000;
const { v4: uuidv4 } = require('uuid');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let restaurants = [{id: '1234', name: 'Biryani Blues'}];

app.get('/restaurants', (req, res) => {
  console.log('mrkjgnk');
  res.send(restaurants)
})

app.get('/restaurants/:id', (req, res) => {
  res.send(restaurants)
})

app.post('/restaurants', (req, res) => {
  res.send(restaurants)
})

app.put('/restaurants/:id', (req, res) => {
  res.send(restaurants)
})

app.delete('/restaurants/:id', (req, res) => {
  res.send(restaurants)
})

app.listen(port, () => {
  console.log(`REST API server listening at http://localhost:${port}`)
})
