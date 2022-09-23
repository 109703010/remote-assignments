// Assignment-3

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, My Server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Assignment-4

var url = require('url');
app.get('/data', (req, res) => {
	var params = url.parse(req.url, true).query;
	if(params.number == null)
		res.send('Lack of Parameter');
	else if(isNaN(params.number))
		res.send('Wrong Parameter');
	else
		res.send(String((Number(params.number) + 1) * Number(params.number) / 2));
})

// Assignment-5

app.use(express.static('.'));