const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 1339

const buildFolder = path.join(__dirname, '../build')
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.params);
	next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(buildFolder) )


app.get('/', (req, res) => {
	// Syns inte på grund av express.static
	res.send('Hello from server')
})

const hamstersRoute = require('./routes/hamsters')
app.use('/api/gallery', hamstersRoute);

// Sist: fånga alla övriga request
// För att frontend routing ska fungera
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})


app.listen(PORT, () => {
	console.log('Server listening on port ' + PORT);
})
