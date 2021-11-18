function middleware_Authenticator(req, res, next) {
    let cookiename = req.cookies.name;
    if (cookiename === 'AuthCookie') {
        next()
    } else {

        res.status(403)
        var status="(Non-Authenticated User)";
        console.log("["+ new Date().toUTCString()+"]"+":"+ req.method,req.originalUrl,status)
        res.render("users/error", { title: "ERROR : 403 Forbidden" })
    }
}

module.exports = middleware_Authenticator