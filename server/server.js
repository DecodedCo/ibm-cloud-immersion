const appName = require('./../package').name;
const express = require('express');
const localConfig = require('./config/local.json');
const path = require('path');
const session = require("express-session");
const express_enforces_ssl = require("express-enforces-ssl");
const passport = require("passport");
const WebAppStrategy = require("bluemix-appid").WebAppStrategy;
const cfEnv = require("cfenv");

const app = express();

// App ID integration

if (!cfEnv.getAppEnv().isLocal) {
  const CALLBACK_URL = "/ibm/bluemix/appid/callback";
  app.use(session({
    secret: "c85320d9ddb90c13f4",
    resave: true,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.enable('trust proxy');
  app.use(express_enforces_ssl());
  passport.use(new WebAppStrategy());

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

  app.get(CALLBACK_URL, passport.authenticate(WebAppStrategy.STRATEGY_NAME));
  app.get("/", passport.authenticate(WebAppStrategy.STRATEGY_NAME), function(req, res, next) {
    console.log("Authenticating...");
    next();
  });
  app.get("/logout", function(req,res,next) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

} // end App ID integration

const port = process.env.PORT || localConfig.port;
app.use(express.static(process.cwd() + '/public'));

app.listen(port);
console.log("Listening on port ", port);