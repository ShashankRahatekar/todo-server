const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs');

const jsonParser = bodyParser.json();

app.use(cors());
app.get('/', (req, res) => {
	const data = fs.readFileSync('./todos.json', {encoding:'utf8', flag:'r'})
	// console.log(data);
	res.send({msg: 'Hello World!!\n', data: data});
})

app.post('/add-data', jsonParser, (req, res) => {

	fs.writeFileSync('./todos.json', JSON.stringify(req.body))
	res.send({msg: 'Header Added Succesfully!!!'});
})

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-type', 'application/json');
// 	res.setHeader('Access-Control-Allow-Origin', '*');
	
// 	res.end({val: 'Hello World!!'});
// });

app.listen(process.env.PORT, () => {
	console.log(`Server Listening to ${process.env.PORT} port on 127.0.0.1`);
});
