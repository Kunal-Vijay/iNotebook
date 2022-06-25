const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
require('dotenv').config();
connectToMongo();

const app = express()
const port = process.env.PORT || 5000

app.use(cors());    
app.use(express.json()); // to send request in content -type : application/json

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`iNotebook app listening on port http://localhost:${port}`)
})
