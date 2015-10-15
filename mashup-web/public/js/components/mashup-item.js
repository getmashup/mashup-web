define(
	[
		'react'
	],
	function(React){
		var MashupItem = React.createClass({
			getInitialState: function(){
				return {
					userName:'ashwin'
				}			
			},
			componentDidMount:function(){
				console.log('triggered once after initial render');
			},
		  	render:function(){
		  		var columnStyle = {
		  			height: '100vh',
		  			overflowY: 'scroll'
		  		}

			    return (
		    		<div className="thumbnail">
		    	        <div className="caption">
		    	            <h3>{this.props.name} </h3>
		    	            <p>{this.props.createdBy}</p>
		    	        </div>
		    	    </div>
			    );
		  	}
		});

		return MashupItem;
	}
);
