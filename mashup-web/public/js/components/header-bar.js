define(['react'],function(React){
	var HeaderBar = React.createClass({
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
		    	<div className="navbar navbar-default navbar-fixed-top">
		    	    <div className="container">

		    	        <div className="navbar-header">
		    	            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		    	                <span className="icon-bar"></span>
		    	                <span className="icon-bar"></span>
		    	                <span className="icon-bar"></span>
		    	            </button>
		    	            <a className="navbar-brand" href="#">Mashup</a>
		    	        </div>

		    	        <div className="navbar-collapse collapse" id="searchbar">

		    	            <ul className="nav navbar-nav navbar-right">
		    	                <li>
		    	                	<a href="#">Cart</a>
		    	                </li>

		    	                <li id="userPage">
		    	                    <a href="#@userpage"><i className="icon-user"></i> My Mashups</a>
		    	                </li>

		    	                <li className="dropdown">
		    	                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
		    	                    	Settings
		    	                    	<span className="caret"></span>
		    	                    </a>
		    	                    <ul className="dropdown-menu">
		    	                        <li><a href="#">Profile settings</a></li>
		    	                        <li role="separator" className="divider"></li>
		    	                        <li><a href="#">Logout</a></li>
		    	                    </ul>
		    	                </li>
		    	            </ul>

		    	            <div className="navbar-form">
		    	                <div className="form-group" style={styleThree}>
		    	                    <div className="input-group" style={styleOne}>
		    	                        <input className="form-control" name="search" placeholder="What are you eating today?" autoComplete="off" autofocus="autofocus" type="text"/>
		    	                    	<span className="input-group-addon" style={styleTwo}>
		    	                    		<span className="glyphicon glyphicon-search"></span>
		    	                    	</span>
		    	                    </div>
		    	                </div>
		    	            </div>

		    	        </div>
		    	    </div>
		    	</div>
		    );
	  	}
	});


	return HeaderBar;
});
