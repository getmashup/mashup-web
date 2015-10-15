define(
	[
		'react',
		'./header-bar'
	],
	function(React, HeaderBar){
		var HomePage = React.createClass({
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
			    	<div id="homePage">
			    		<HeaderBar />
			    		Welcome, {this.state.userName}
			    		<div className="row" style={containerStyle}>
			    		    <div className="col-sm-6 col-md-5" style={columnStyle}>
		    		    		<div className="thumbnail">
		    		    	        <div className="caption">
		    		    	            <h3>Paneer tikka masala </h3>
		    		    	            <p>Recommended</p>
		    		    	        </div>
		    		    	    </div>
			    		    	<div className="thumbnail">
			    		            <div className="caption">
			    		                <h3>Paneer tikka masala </h3>
			    		                <p>by guest01</p>
			    		            </div>
			    		        </div>   
		    		        	<div className="thumbnail">
		    		                <div className="caption">
		    		                    <h3>Paneer tikka masala </h3>
		    		                    <p>by guest02</p>
		    		                </div>
		    		            </div>
	    		            	<div className="thumbnail">
	    		                    <div className="caption">
	    		                        <h3>Paneer tikka masala </h3>
	    		                        <p>by guest03</p>
	    		                    </div>
	    		                </div>
    		                	<div className="thumbnail">
    		                        <div className="caption">
    		                            <h3>Paneer tikka masala </h3>
    		                            <p>by guest04</p>
    		                        </div>
    		                    </div> 

    		                    <div className="thumbnail">
    		                        <div className="caption">
    		                            <h3>Paneer tikka masala </h3>
    		                            <p>by guest05</p>
    		                        </div>
    		                    </div>
    		                    <div className="thumbnail">
    		                        <div className="caption">
    		                            <h3>Paneer tikka masala </h3>
    		                            <p>by guest06</p>
    		                        </div>
    		                    </div>
			    		    </div>
			    		    <div className="col-sm-6 col-md-7">
			    		        <div className="thumbnail">
			    		            <img src="/images/paneer-tikka-masala.jpg" style={imageStyle} />
			    		            <div className="caption">
			    		                <h3>Paneer Tikka Masala</h3>
			    		                <p>by guest02</p>
			    		  				<div>
			    		  					<p>Step 1. First heat the pan...</p>
			    		  					<p>Step 2. Next, pour the contents...</p>
			    		  					<p>Step 3. Serve hot</p>
			    		  				</div>
			    		            </div>
			    		        </div>
			    		    </div>
			    		</div>
	 		    	</div>
			    );
		  	}
		});


		return HomePage;
	}
);
