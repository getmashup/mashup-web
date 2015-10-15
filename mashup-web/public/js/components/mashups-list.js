define(
	[
		'react',
		'./mashup-item'
	],
	function(React, MashupItem){
	
		var MashupsList = React.createClass({
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
		  		};

		  		var itemList = [
		  			{
		  				mashupName: 'Paneer Tikka Masala',
		  				createdBy: 'Recommended'
		  			},{
		  				mashupName: 'Paneer Tikka Masala',
		  				createdBy: 'guest01'
		  			},{
		  				mashupName: 'Paneer Tikka Masala',
		  				createdBy: 'guest02'
		  			},{
		  				mashupName: 'Paneer Tikka Masala',
		  				createdBy: 'guest03'
		  			},{
		  				mashupName: 'Paneer Tikka Masala',
		  				createdBy: 'guest04'
		  			}
		  		]
		  		var mashupItems = itemList.map(function(mashupDetails){
		  			return (
		  				<MashupItem name={mashupDetails.mashupName} createdBy={mashupDetails.createdBy} />
		  			)	
		  		});

			    return (
	    		    <div className="col-sm-6 col-md-5" style={columnStyle}>
			    		{mashupItems}
	    		    </div>
			    );
		  	}
		});

		return MashupsList;
	}
);
