/* @author Ashwin Iyer
 * @details These are the API handlers for authentication
 */
define(
    [
        'async',
        'bcrypt',
        'crypto',
        '../../database/auth-db-api',
    ], 
    function (async, bcrypt, crypto, authDbApi) {
        var bcrypt = require('bcrypt'),
            SALT_WORK_FACTOR = 10,
            debug = require('debug')('mashup:auth-api-handlers');


        function signup(req, responseCallback){
            debug('api-handler signup');

            var reqObj = req.body;
                reqObj.username = req.body.username.toLowerCase();

            var token = crypto.randomBytes(15).toString('hex');
            reqObj.token = token;

            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
                if (err){
                    debug(err);
                }

                // hash the password using our new salt
                bcrypt.hash(reqObj.password, salt, function(err, hash) {
                    if (err) return next(err);
             
                    // override the cleartext password with the hashed one
                    reqObj.password = hash;
                    authDbApi.registerNewUser(reqObj, responseCallback);
                });
            });
        }    

        function login(req, responseCallback){
            debug('api-handler login');
            var reqObj = req.body;

            async.series(
                [
                    function (callback) {
                        authDbApi.getUserDetails(reqObj, callback);
                    }
                ],
                function(err, results){
                    if(err){
                        debug(err);
                    }else{
                        var responseData = {};

                        if(results[0].username){   
                            bcrypt.compare(reqObj.password, results[0].password, function(err, res) {
                                if (err){
                                    debug(err);
                                }else{
                                    if(res){
                                        debug('success');
                                        responseData = {
                                            username: results[0].username,
                                            displayName: results[0].displayName,
                                            status: 'loggedIn'
                                        }
                                    }else{
                                        debug('failure');
                                        responseData = {
                                            username: null,
                                            displayName: null,
                                            status: null
                                        }
                                    }

                                    responseCallback(responseData);
                                }
                            });
                        }else{
                            responseData = {
                                userId: null,
                                displayName: null,
                                status: null
                            }
                            responseCallback(responseData);
                        }
                    }
                }
            );
        }

        function checkForUser(req, responseCallback){
            authDbApi.getUserDetails(req.body, function(err, resultData){
                var responseData = {};
                if(err){
                    debug(err);
                }else{
                    if(resultData.phone){
                        responseData = {
                            status: 'notavailable'
                        }
                    }else{
                        responseData = {
                            status: 'available'
                        }
                    }
                }
                responseCallback(responseData);
            });
        }

        function homeRender(req, responseCallback){
            debug('inside homeRender');
            var argOne = 'index',
                argTwo = {};
            console.log(req.session.user);
            if(req.session.user){
                argTwo = {
                    username: req.session.user.username,
                    status: req.session.user.status,
                    display_name: req.session.user.displayName
                };                        
            }
            else {
                argTwo = {
                    username: null,
                    status: null,
                    display_name: null
                };
            }

            responseCallback(argOne, argTwo);
        };
        
        return {
            signup: signup,
            login: login,
            checkForUser: checkForUser,
            homeRender: homeRender
        }
    }
);