let app = require('../../server.js');
let db = app.get('db');

module.exports = {
    test: function(req, res) {
        db.test((err, response) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(response)
            }
        })
    },
    getVideoById: (req, res) => {
    	db.getVideoById([req.params.id], (err, response) => {
    		if (err) {
    			res.send(err);
    		} else {
    			res.status(200).send(response);
    		}
    	});
    },
    findUser: function(username, password, cb) {
        db.findUser( [ username, password], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                cb( response );
            }
        });
    },
    signUp: ( req, res ) => {
        db.signUp( [ req.body.fname, req.body.lname, req.body.email, req.body.username, req.body.password, req.body.birthday ], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        } )
    }
};