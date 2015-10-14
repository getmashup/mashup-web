/* @author Ashwin Iyer
 * @details Configuring the API related to authentication and invoking other authentication modules
 */
define(
    [
        '../route-handlers/auth-api-handlers'
    ],
    function(authApiHandlers) {
        function initialize(expressInstance) {
            //passport configurations
            var app = expressInstance,
                debug = require('debug')('mashup:auth-api');

            app.get('/logout', function (req, res) {
                debug('request to /logout');
                req.session.destroy(function(){
                    res.redirect('/');
                });
            });

            app.post('/signup', function(req, res){
                debug('inside /police/signup');
                authApiHandlers.signup(req, function(responseData){
                    req.session.regenerate(function(){
                        req.session.user = responseData;
            
                        res.json(responseData);                          
                    });
                });
            });

            app.post('/login', function (req, res){
                debug('Inside login');
                authApiHandlers.login(req, function(responseData){                   
                    if(responseData.status === 'loggedIn'){
                        debug(responseData);

                        req.session.regenerate(function(){
                            req.session.user = responseData;
                        
                            res.json(responseData);                         
                        });
                    }else{
                        res.json({
                            status: 'invalid'
                        })
                    }
                });
            });

            app.get('/', function (req, res) {
                debug('request to /');
                authApiHandlers.homeRender(req, function(argOne, argTwo){
                    res.render(argOne, argTwo);
                });
            });
        }
        return {
            initialize: initialize
        }
    }
);