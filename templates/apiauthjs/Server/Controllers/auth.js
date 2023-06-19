const passport = require('passport');

const User = require('../Models/user');

const { GenerateToken } = require('../Util/index');

// Process Functions
function ProcessLogin(req, res, next)
{
    passport.authenticate('local', (err, user, info) =>
    {
        // are there server errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // are there login errors?
        if(!user)
        {
            return res.json({success: false, msg: 'ERROR: Authentication Error'});
        }

        req.logIn(user, (err) =>
        {
            // are there db errors?
            if(err)
            {
                console.error(err);
                res.end(err);
            }

            const authToken = GenerateToken(user);

            return res.json({success: true, msg: 'User Logged In Successfully!', user: {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                emailAddress: user.emailAddress
            }, token: authToken});
        });
        return;
    })(req, res, next);
}

function ProcessRegister(req, res, next)
{
    // instantiate a new user object
    let newUser = new User
    ({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, (err) =>
    {
        if(err)
        {
            if(err.name == "UserExistsError")
            {
                console.error('ERROR: User Already Exists!');
            }
            console.error(err.name); // other error
            return res.json({success: false, msg: 'ERROR: Registration Failure'});
        }
        return res.json({success: true, msg: 'User Registered Successfully!'});
    });
}

function ProcessLogout(req, res, next)
{
    req.logout(() =>{
        console.log("User Logged Out");
        // Note: the client will need remove the token = require(local storage - the server cannot expire the token
    });

    res.json({success: true, msg: 'User Logged out Successfully!'});
}

module.exports = {
    ProcessLogin,
    ProcessRegister,
    ProcessLogout
}
