const express = require("express");
const router = express.Router();
const users = require("../data/users");
const middleware_Authenticator = require("../data/middleware_Authenticator")

router.get("/", (req, res) => {
try{
    let cookiename=req.cookies.name;

    if (cookiename === 'AuthCookie') {
        var status="(Authenticated User)";
        console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
        res.redirect("/private")
    } else {
        var status="(Non-Authenticated User)";
        console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
        res.render("users/index", { title: "Login to go ahead" });
    }

}
catch(e){
    console.log(e);
}

});


router.get("/private", middleware_Authenticator, (req, res, next) => {
    
    var user = req.session.user
    try{
        var status="(Authenticated User)";
        console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
    res.render("users/userdetails",
        {
            user,
            title: `Welcome ${user.firstName} ${user.lastName}`
        })
       
}
catch(e){
    console.log(e);
} }
);




router.post("/login", (req, res, next) => {
    let usersname = req.body.username;
    let pass = req.body.password
    let unameresult, passresult
    try{
    if (!usersname || !pass) {
        var status="(Non-Authenticated User)";
    console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
  res.render("users/index",
  {
       
        title: "Home page: Login",
        status: false,
        message: "No Username or password provided",
        
    })}

    
    else {
        unameresult = users.usernameValidator(usersname);
        passresult = users.passwordValidator(usersname, pass)
       
        if (unameresult && passresult.status) {
            let { _id, username, firstName, lastName, Profession, Bio } = passresult.user
            res.cookie('name', 'AuthCookie')
            let user = {
                _id,
                username,
                firstName,
                lastName,
                Profession,
                Bio
            }
            req.session.user = user
            var status="(Authenticated User)";
            console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
            res.redirect("/private")
        }
        else {
            var status="(Non-Authenticated User)";
            console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
            res.render("users/index",
                {
                    title: "Home page: Login",
                    status: false,
                    message: "The provided username and password is invalid !!"
                    
                }
            )
        }

      
    }

}
catch(e){console.log(e);} 
});

router.get("/logout", (req, res, next) => {
    try{

    res.clearCookie('name')
    var status="(Non-Authenticated User)";
    console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
    res.render("users/logout",
    {
     
        message: "User has been logged out"
        
    }
)

    }
    catch(e){console.log(e);
    }
});
module.exports = router;