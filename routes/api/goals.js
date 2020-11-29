const express = require("express");
const router = express.Router();
const User = require("../../models/user.js");
const passport = require("../../config/passport")


// Save two inputted values and one calculated value
router.post("/api/goal/save", (req, res) => {
    console.log("/api/goal/save ->" + JSON.stringify(req.body));
    // const goal = new Goal(req.body);
    User.findByIdAndUpdate(req.body._id, {
        savings: req.body.savings,
        deposit: req.body.deposit,
        timeframe: req.body.timeframe,
    }).then(response => {
        res.send(response);
    }); 
});


// Save inputted email and password
router.post("/api/goal/register", (req, res) => {
    // console.log("/api/goal/register ->" + JSON.stringify(req.body));
    // const goal = new Goal(req.body);
    User.create(req.body, (err, goal) => {
        // console.log("Line 10: " + goal);
        res.redirect(307, "/api/goal/login");
    })
});

// Retrieve savings, timeframe and goal values associated with user ID
router.get("/api/goal", (req, res) => {
    User.find().then((response) => {
        res.json(response);
    });
});

// Search using user ID in database for user associated with inputted email and password
router.post("/api/goal/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        console.log({ err });
        if (err) {
            return next(err);
        }
        console.log({ user })
        if (!user) {
            return res.status(422).json({
                errors: [
                    {
                        msg: info.msg,
                    },
                ],
            });
        }
        console.log({ user });
        req.logIn(user, (err) => {
            if (err) {
                return res.status(400).json({
                    errors: [{ msg: err }]
                })
            }
            res.json({
                data: user,
            });
        })

    })(req, res, next);
});

// Update savings, timeframe and deposit values
router.put("/api/goal/update", (req, res) => {
    const user = req.body;
    User.findByIdAndUpdate(user._id, {
        savings: req.body.savings,
        deposit: req.body.deposit,
        timeframe: req.body.timeframe,
    }, { new: true }).then((err, response) => {
        console.log(response);
        res.json(response);
    });
});

module.exports = router;