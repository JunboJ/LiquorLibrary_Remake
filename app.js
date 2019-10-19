const express = require('express');
const parser = require('body-parser');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

// import routes
const homePageRouter = require('./routes/home');

const _404Controller = require('./controllers/error');



app.use(homePageRouter.routes);

app.use(_404Controller.get_404);

