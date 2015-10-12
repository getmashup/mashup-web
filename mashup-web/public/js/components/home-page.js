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
			    return (
			    	<div id="homePage">
			    		<HeaderBar />
			    		Welcome, {this.state.userName}
	 		    	</div>
			    );
		  	}
		});


		return HomePage;
	}
);
