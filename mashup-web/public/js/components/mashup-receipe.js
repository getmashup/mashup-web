define(
	[
		'react'
	],
	function(React){
		var MashupReceipe = React.createClass({
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
		  		var imageStyle = {
		  			maxWidth: '60%',
		  			maxHeight: '100%'
		  		}
		  		
		  		var mashupDetails = this.props.mashupDetails;

			    return (
	    		    <div className="thumbnail">
	    		        <img src={mashupDetails.mashupImage} style={imageStyle} />
    		          	<div className="caption">
    		              	<h3>{mashupDetails.mashupName}</h3>
    		              	<p>{mashupDetails.createdBy}</p>
    						<div>
    							<p>{mashupDetails.receipeDescription}</p>
    						</div>
    		         	</div>
	    		    </div>
			    );
		  	}
		});

		return MashupReceipe;
	}
);
