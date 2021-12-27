const express = require('express'),
  cors = require('cors'),
  morgan = require('morgan');

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors({ origin: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).send('Software Avanzado - Original - Práctica 4 - P') 
});

app.listen(3000, () => console.log(`Server on port 3000`))
