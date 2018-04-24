import { WSAEPFNOSUPPORT } from 'constants';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
require('./models/User');
require('./services/googleAuth');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use('*', cors());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
