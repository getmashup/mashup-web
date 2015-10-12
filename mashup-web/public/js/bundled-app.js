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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,HomePage){	
		console.log('Loaded the Home Page');
		React.render(React.createElement(HomePage, null), document.getElementById('componentContainer'));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//webpack --progress --colors --watch (for development)
	//webpack -p (for production)

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(1),
			__webpack_require__(7)
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
				    return (
				    	React.createElement("div", {id: "homePage"}, 
				    		React.createElement(HeaderBar, null), 
				    		"Welcome, ", this.state.userName
		 		    	)
				    );
			  	}
			});


			return HomePage;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
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