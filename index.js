const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello Baby');
});


app.get('/about-us', (req, res) => {
    // res.status(200).json({
    //     user: 'ramya',
    //     BB: 'Santheep'
    // })
    res.status(500).json({
        error: 'Somwthing went wrong'
    })
})


app.get("/ab*cd", (req, res) => {
    res.send('I am Regix page')
})

app.get('/contact-us', (req, res) => {
    res.send('love on programming')
})

app.get('/home', (req, res) => {
    res.send(('This is home'))
})

app.get('/user/:id/status/:status_id', (req, res) => {
    res.send(req.params)
})

app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params)
})


app.get('/services', (req, res) => {
    res.send('<ul>Designing</ul><ul>Video Editing</ul><ul>Coding</ul>')
})

app.post('/login', (req, res) => {

    res.send('login success')

})


app.delete('/delete', (req, res) => {
    res.send('delete successs')
})


app.listen(3000, () => console.log('Server is running at the port 3000....'))