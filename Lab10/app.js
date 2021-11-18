let express = require("express");
let body = require("body-parser");
let app = express();
let cookie = require('cookie-parser');
let cfgRoutes = require("./routes");
let expresshb = require("express-handlebars");

let hinst = expresshb.create({
    defaultLayout: "main",
  
});
let reqbodycleaner = (req, res, next) => {
let rbody = req.body;
let rmbody = req.body._method;
    if (rbody && rmbody) {
        req.method = req.body._method;
        delete req.body._method;
    }


    next();
};


try{
let static = express.static(__dirname + "/public");

app.use("/", static);
app.use(cookie());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
let exSess = require('express-session')
app.use(reqbodycleaner);
app.use(exSess({
    secret: 'web programming',
    resave: false,
    rolling:false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
}
catch(e){console.log(e);}

try{
 
app.engine('handlebars', hinst.engine);
app.set('view engine', 'handlebars');
cfgRoutes(app);
var port = 3000;
app.listen(port, () => {
    console.log("Welcome to Kunal's App");
  
    if (process && process.send) process.send({ done: true });
});
}
catch(e){console.log(e);}