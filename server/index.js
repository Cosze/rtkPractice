const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(express.static('client/dist'));

app.get('/secret', (req, res) => {
  console.log('generating secret data');
  res.status(200).send({secret: 31});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
