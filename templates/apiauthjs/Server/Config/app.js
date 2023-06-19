// modules for express server
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Database modules
const mongoose = require('mongoose');
const db = require('./db');

// modules for authentication
const session = require('express-session'); // use session
const passport = require('passport'); // authentication
const passportLocal = require('passport-local'); // authentication strategy

// modules for jwt support
const cors = require('cors');
const passportJWT = require('passport-jwt');

// define JWT aliases
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

// authentication objects
let localStrategy = passportLocal.Strategy; // alias
// const User Model
const User = require('../Models/user');

mongoose.connect(db.localURI);

// DB Connection Events
mongoose.connection.on('connected', () =>{
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on('disconnected', () =>{
    console.log('Disconnected = require(MongoDB');
});

const indexRouter = require('../Routes/index');
const authRouter = require('../Routes/auth');

let app = express();

// middleware modules
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors()); // adds CORS to the config

// setup express session
app.use(session({
  secret: db.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// implement an Auth Strategy
passport.use(User.createStrategy());

User.serializeUser()

// serialize and deserialize the user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// setup JWT Options
let jwtOptions = 
{
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: db.sessionSecret
}

// setup JWT Strategy
let strategy = new JWTStrategy(jwtOptions, function(jwt_payload, done)
{
    try 
    {
        const user = User.findById(jwt_payload.id);
        if (user) 
        {
            return done(null, user);
        }
        return done(null, false);
    } 
    catch (error) 
    {
        return done(error, false);
    }
});

passport.use(strategy);

// authentication routes
app.use('/api/', authRouter);

// protected routes
app.use('/api/', passport.authenticate('jwt', {session: false}), indexRouter);

module.exports = app;
