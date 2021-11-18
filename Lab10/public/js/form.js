let users = require('./users')
    (function () {
        let Username = {
            usernameValidator(uname) {
                var x = uname.length;
                if (x == 0) throw "The user must provide a valid username";
                return users.users[uname];
            } };

        let Password = {

            passwordValidator: (usersname, password) => {


                let user = users.users[usersname];
                let msg =`${usersname} ${password}`
                    if (user){
                       
                    if (bcrypt.compareSync(password, user.hashedPassword)){
                    return {
                        status: true,
                        message: msg
                    }}
                    else
                    return {
                        status: false,
                        message: "The user has provided wrong username and password"
                    };
              }
              else
              return {
                  status: false,
                  message: "The user has provided the invalid username"
              };
        } }


        var LoginForm = document.getElementById("login-form");

        if (LoginForm) {
            let usersname = document.getElementById("Username");
            let password = document.getElementById("Password");

            let errC = document.getElementById("error-container");
            let errorText = errC.getElementsByClassName(
                "text-goes-here"
            )[0];


            let resultText =  document.getElementById("result-container").getElementsByClassName(
                "text-goes-here"
            )[0];

            LoginForm.addEventListener("submit", event => {
                event.preventDefault();

                try {
                    
                    try{
                    errC.classList.add("hidden");
                    rC.classList.add("hidden");
                    }
                    catch(e){
                        console.log(e);
                    }
             

                    let unamevalue = Username.usernameValidator(
                        usersname.value
                    );

                    let passresult = Username.passwordValidator(
                        password.value
                    );

                    resultText.textContent = "The username is " + unamevalue;
                    rC.classList.remove("hidden");

                } catch (e) {

                    let errormsg = typeof e === "string" ? e : e.errormsg;
                    errorValue.textContent = e;
                    console.log(e);
                    errC.classList.remove("hidden");
                }
            });
        }
    })();