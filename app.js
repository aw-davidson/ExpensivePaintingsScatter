const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))
var PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('app listening on port 3000!'))
