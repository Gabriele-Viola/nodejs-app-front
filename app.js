const express = require('express')
const app = express();
const path = require('path')
const gamesRoutes = require('./Routes/web')

const PORT = process.env.PORT
const HOST = process.env.HOST



app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs')

app.use('/games', gamesRoutes)



app.listen(3000, () =>{
    console.log(`your server start on: ${HOST}:${PORT}`);

})
