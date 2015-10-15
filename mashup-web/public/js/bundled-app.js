webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(1),
			__webpack_require__(6),
			__webpack_require__(7)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, LoginPage, HomePage){	
			console.log('Loaded the Home Page');
			var body = document.body,
				username = body.getAttribute('data-username');

			if(!username){
				React.render(React.createElement(LoginPage, null), document.getElementById('componentContainer'));
			}else{
				React.render(React.createElement(HomePage, null), document.getElementById('componentContainer'));
			} 
			
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//webpack --progress --colors --watch (for development)
	//webpack -p (for production)

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(1),
			__webpack_require__(2)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
			var LoginPage = React.createClass({displayName: "LoginPage",
				signup:{
					usernameStatus:'false'
				},
				verifyLogin:function(){
					console.log('Login clicked');
					var username = document.getElementById('loginNameInput').value,
						password = document.getElementById('loginPwInput').value,
						postData = {
							username: username,
							password: password 
						};
					//this code needs to be changed as the authentication technique is not secure.
					$.ajax({
					    type: 'POST',
					    url: '/login',
					    data: postData,
					    datatype:'json',
					    success: function(data){
					    	if(data.status === 'loggedIn'){
					    		window.location.replace('/');
					    	}else if(data.status === 'authentication failure'){
					    		document.getElementById('loginErrMsg').innerHTML = "Looks like you entered wrong credentials. Please try again"
					    	}               
					    }.bind(this),
					    error: function(httpRequest,status,error){
					    	console.log('/');
					    	//window.location.replace('/');
					    }
					});
				},
				checkForUsername:function(){
					var username = document.getElementById('signupNameInput');
					if(username.value !== ''){
						var postData = {
							username: username.value
						};
						$.ajax({
						    type: 'POST',
						    url: '/signup/username/verify',
						    data: postData,
						    datatype: 'json',
						    success: function(data){
						  		if(data.status === 'unavailable'){
						  			document.getElementById('signupNameMsg').innerHTML = 'username not available';
						  			this.signup.usernameStatus = 'false';

						  		}else if(data.status === 'available'){
						  			document.getElementById('signupNameMsg').innerHTML = 'username available';
						  			this.signup.usernameStatus = 'ok';
						  		}
						    }.bind(this),
						    error: function(httpRequest,status,error){
						    	window.location.replace('/');
						    }
						});
					}else{
						this.signup.usernameStatus = 'false';
					}
				},
				signup:function(){
					var username = document.getElementById('signupNameInput').value,
						pwOne = document.getElementById('signupPwInputOne').value,
						pwTwo = document.getElementById('signupPwInputTwo').value,
						that = this;
					if(pwOne !== pwTwo){
						document.getElementById('signupPwMsg').innerHTML = 'Passwords do not match';
					}else if(that.signup.usernameStatus === 'ok' && pwOne !== ''){
						var postData = {
							username: username,
							password: pwOne 
						};
						$.ajax({
						    type: 'POST',
						    url: '/signup',
						    data: postData,
						    datatype: 'json',
						    success: function(data){
						    	window.location.replace('/');             
						    }.bind(this),
						    error: function(httpRequest,status,error){
						    	window.location.replace('/');
						    }
						});
					}else{
						console.log('username exists');
					}
				},
			  	render:function(){
			  		var that = this;
				    return (
				    	React.createElement("div", {id: "homePage"}, 
				    		React.createElement("h2", {id: "mainHeader"}, "Welcome to Mashup"), 
				    		
				    		React.createElement("div", {id: "main", className: "section group"}, 
				    			React.createElement("div", {id: "contentWrapper", className: "section group"}, 
						     		React.createElement("div", {id: "loginSection", className: "column loginSection"}, 
						     			React.createElement("h5", null, "Existing user?"), 
						     			React.createElement("h3", {id: "loginHeader"}, "Login"), 
							    		React.createElement("p", {className: "inputClassOne"}, 
							     			React.createElement("input", {type: "text", id: "loginNameInput", placeholder: "User-name"})
							     		), 
							     		React.createElement("p", {className: "inputClassOne"}, 
							     			React.createElement("input", {type: "password", id: "loginPwInput", placeholder: "Password"})
							     		), 
							     		React.createElement("div", {onClick: that.verifyLogin, className: "buttonClassOne", id: "loginButton"}, "Login"), 		
							     		React.createElement("div", {id: "loginErrMsg"})
							     	), 

						     		React.createElement("div", {id: "signupSection", className: "column signupSection"}, 
						     			React.createElement("h5", null, "Are you a new user?"), 
						     			React.createElement("h3", {id: "signupHeader"}, "Sign Up!"), 
						     			React.createElement("p", {className: "inputClassOne"}, 
						     				React.createElement("input", {type: "text", id: "signupDisplayNameInput", placeholder: "Your full name"})
						     			), 
						     			React.createElement("p", {className: "inputClassOne"}, 
						     				React.createElement("input", {type: "text", id: "signupNameInput", placeholder: "Choose a username", onBlur: that.checkForUsername}), 
						     				React.createElement("div", {id: "signupNameMsg"})
						     			), 
						     			React.createElement("p", {className: "inputClassOne"}, 
						     				React.createElement("input", {type: "password", id: "signupPwInputOne", placeholder: "Choose a password"}), 
						     				React.createElement("br", null), React.createElement("br", null), 
						     				React.createElement("input", {type: "password", id: "signupPwInputTwo", placeholder: "Re-enter your password"}), 
						   					React.createElement("div", {id: "signupPwMsg"})
						     			), 
						     			React.createElement("div", {onClick: that.signup, className: "buttonClassOne", id: "signupButton"}, "Sign Up!")	
						     		)
						     	), 
					     		React.createElement("div", {id: "bgImg"}), 
					     		React.createElement("div", {className: "overlay"})
					     	)	
		 		    	)
				    );
			  	}
			});
			return LoginPage;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(1),
			__webpack_require__(8)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, HeaderBar){
			var HomePage = React.createClass({displayName: "HomePage",
				getInitialState: function(){
					return {
						userName:'ashwin'
					}			
				},
				componentDidMount:function(){
					console.log('triggered once after initial render');
				},
			  	render:function(){
			  		var imageStyle = {
			  			maxWidth: '60%',
			  			maxHeight: '100%'
			  		}
			  		var containerStyle = {
			  			position: 'absolute',
			  			top: '10%',
			  			width: '100%'
			  		}

			  		var columnStyle = {
			  			height: '100vh',
			  			overflowY: 'scroll'
			  		}
				    return (
				    	React.createElement("div", {id: "homePage"}, 
				    		React.createElement(HeaderBar, null), 
				    		"Welcome, ", this.state.userName, 
				    		React.createElement("div", {className: "row", style: containerStyle}, 
				    		    React.createElement("div", {className: "col-sm-6 col-md-5", style: columnStyle}, 
			    		    		React.createElement("div", {className: "thumbnail"}, 
			    		    	        React.createElement("div", {className: "caption"}, 
			    		    	            React.createElement("h3", null, "Paneer tikka masala "), 
			    		    	            React.createElement("p", null, "Recommended")
			    		    	        )
			    		    	    ), 
				    		    	React.createElement("div", {className: "thumbnail"}, 
				    		            React.createElement("div", {className: "caption"}, 
				    		                React.createElement("h3", null, "Paneer tikka masala "), 
				    		                React.createElement("p", null, "by guest01")
				    		            )
				    		        ), 
			    		        	React.createElement("div", {className: "thumbnail"}, 
			    		                React.createElement("div", {className: "caption"}, 
			    		                    React.createElement("h3", null, "Paneer tikka masala "), 
			    		                    React.createElement("p", null, "by guest02")
			    		                )
			    		            ), 
		    		            	React.createElement("div", {className: "thumbnail"}, 
		    		                    React.createElement("div", {className: "caption"}, 
		    		                        React.createElement("h3", null, "Paneer tikka masala "), 
		    		                        React.createElement("p", null, "by guest03")
		    		                    )
		    		                ), 
	    		                	React.createElement("div", {className: "thumbnail"}, 
	    		                        React.createElement("div", {className: "caption"}, 
	    		                            React.createElement("h3", null, "Paneer tikka masala "), 
	    		                            React.createElement("p", null, "by guest04")
	    		                        )
	    		                    ), 

	    		                    React.createElement("div", {className: "thumbnail"}, 
	    		                        React.createElement("div", {className: "caption"}, 
	    		                            React.createElement("h3", null, "Paneer tikka masala "), 
	    		                            React.createElement("p", null, "by guest05")
	    		                        )
	    		                    ), 
	    		                    React.createElement("div", {className: "thumbnail"}, 
	    		                        React.createElement("div", {className: "caption"}, 
	    		                            React.createElement("h3", null, "Paneer tikka masala "), 
	    		                            React.createElement("p", null, "by guest06")
	    		                        )
	    		                    )
				    		    ), 
				    		    React.createElement("div", {className: "col-sm-6 col-md-7"}, 
				    		        React.createElement("div", {className: "thumbnail"}, 
				    		            React.createElement("img", {src: "/images/paneer-tikka-masala.jpg", style: imageStyle}), 
				    		            React.createElement("div", {className: "caption"}, 
				    		                React.createElement("h3", null, "Paneer Tikka Masala"), 
				    		                React.createElement("p", null, "by guest02"), 
				    		  				React.createElement("div", null, 
				    		  					React.createElement("p", null, "Step 1. First heat the pan..."), 
				    		  					React.createElement("p", null, "Step 2. Next, pour the contents..."), 
				    		  					React.createElement("p", null, "Step 3. Serve hot")
				    		  				)
				    		            )
				    		        )
				    		    )
				    		)
		 		    	)
				    );
			  	}
			});


			return HomePage;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React){
		var HeaderBar = React.createClass({displayName: "HeaderBar",
			getInitialState: function(){
				return {
					userName:'ashwin'
				}			
			},
			componentDidMount:function(){
				console.log('triggered once after initial render');
			},
		  	render:function(){
		  		var styleOne = {
		  			display:"table"
		  		},
		  		styleTwo = {
		  			width: "1%"
		  		},
		  		styleThree = {
		  			display:'inline'
		  		};


			    return (
			    	React.createElement("div", {className: "navbar navbar-default navbar-fixed-top"}, 
			    	    React.createElement("div", {className: "container"}, 

			    	        React.createElement("div", {className: "navbar-header"}, 
			    	            React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse"}, 
			    	                React.createElement("span", {className: "icon-bar"}), 
			    	                React.createElement("span", {className: "icon-bar"}), 
			    	                React.createElement("span", {className: "icon-bar"})
			    	            ), 
			    	            React.createElement("a", {className: "navbar-brand", href: "#"}, "Mashup")
			    	        ), 

			    	        React.createElement("div", {className: "navbar-collapse collapse", id: "searchbar"}, 

			    	            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
			    	                React.createElement("li", null, 
			    	                	React.createElement("a", {href: "#"}, "Cart")
			    	                ), 

			    	                React.createElement("li", {id: "userPage"}, 
			    	                    React.createElement("a", {href: "#@userpage"}, React.createElement("i", {className: "icon-user"}), " My Mashups")
			    	                ), 

			    	                React.createElement("li", {className: "dropdown"}, 
			    	                    React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false"}, 
			    	                    	"Settings", 
			    	                    	React.createElement("span", {className: "caret"})
			    	                    ), 
			    	                    React.createElement("ul", {className: "dropdown-menu"}, 
			    	                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Profile settings")), 
			    	                        React.createElement("li", {role: "separator", className: "divider"}), 
			    	                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Logout"))
			    	                    )
			    	                )
			    	            ), 

			    	            React.createElement("div", {className: "navbar-form"}, 
			    	                React.createElement("div", {className: "form-group", style: styleThree}, 
			    	                    React.createElement("div", {className: "input-group", style: styleOne}, 
			    	                        React.createElement("input", {className: "form-control", name: "search", placeholder: "What are you eating today?", autoComplete: "off", autofocus: "autofocus", type: "text"}), 
			    	                    	React.createElement("span", {className: "input-group-addon", style: styleTwo}, 
			    	                    		React.createElement("span", {className: "glyphicon glyphicon-search"})
			    	                    	)
			    	                    )
			    	                )
			    	            )

			    	        )
			    	    )
			    	)
			    );
		  	}
		});


		return HeaderBar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
]);