const express = require('express')
const app_p1 = express()
let bodyParser = require('body-parser')
let cors = require('cors')

var db150302023 = require('./db150302023')

app_p1.use(bodyParser.json())
app_p1.use(bodyParser.urlencoded({extended: true}))
app_p1.use(bodyParser.text())
app_p1.use(bodyParser.json({type: 'application/json'}))
app_p1.use(cors())

app_p1.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Access-Control-Allow-Headers')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT')
  next()
})

app_p1.get('/departments', (req, res) => {
	db150302023.all()
		.then(function (departments) {
		  res.status(200)
			.json(departments)
		})
		.catch(function (err) {
			console.log(err)
			res.status(500).json({error: true, data: {error: err,
        message: err.message}});
		  })
})

app_p1.get('/searchByDepartment', (req, res) => {
  //console.log(req.query.name)
  db150302023.byDepartment(req.query.department)
		.then(function (departments) {
		  res.status(200)
			.json(departments)
		})
		.catch(function (err) {
			console.log(err)
			res.status(500).json({error: true, data: {error: err,
        message: err.message}});
		  })
})

app_p1.get('/searchById', (req, res) => {
	console.log(req.query.id);
  let depId = req.query.id
  db150302023.forge({id: depId}).fetch().then(function (departments) {
    if (!departments) {
      return res.status(404).json({ error: true, message: 'Department not found' })
    } else {
      res.status(200).json(departments)
    }
  }).catch((err) => {
    console.log(err)
    res.status(500).json({error: true, data: {error: err, message: err.message}})
  })
})

app_p1.get('/', (req, res) => res.send('Hello World!'))

app_p1.listen(3000, () => console.log('Example app listening on port 3000!'))
