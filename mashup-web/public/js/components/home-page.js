define(
	[
		'react',
		'./header-bar',
		'./mashups-list',
		'./mashup-receipe'
	],
	function(React, HeaderBar, MashupsList, MashupReceipe){
		var HomePage = React.createClass({
			getInitialState: function(){
				return {
					userName:'ashwin'
				}			
			},
			componentDidMount:function(){
				console.log('triggered once after initial render');
			},
			getSearchItem: function(){

			},

		  	render:function(){
		  		
		  		var containerStyle = {
		  			position: 'absolute',
		  			top: '10%',
		  			width: '100%',
		  			marginLeft: '1%'
		  		}

		  		var mashupDetails = {
		  			mashupName: 'Paneer Butter Masala',
		  			mashupImage: '/images/paneer-tikka-masala.jpg',
		  			createdBy: 'Recommended',
		  			ratings: 4/5,
		  			receipeDescription: 'First pour 2 eggs on to a frying pan. Then .... ',
		  			receipeItems: [
		  			    {
		  			        item: 'eggs',
		  			        quantity: '2'
		  			    },
		  			    {
		  			        item: 'garam masala',
		  			        quantity: '200 grams'
		  			    },
		  			    {
		  			        item: 'tomatoes',
		  			        quantity: '500 grams'
		  			    },
		  			    {
		  			        item: 'salt',
		  			        quantity: '500 grams'
		  			    },
		  			]
		  		}
		  		
			    return (
			    	<div id="homePage">
			    		<HeaderBar />
			    		Welcome, {this.state.userName}
			    		<div className="row" style={containerStyle}>
			    			<MashupsList />

			    		    <div className="col-sm-6 col-md-7">
			    		        <MashupReceipe mashupDetails={mashupDetails} />
			    		    </div>
			    		</div>
	 		    	</div>
			    );
		  	}
		});


		return HomePage;
	}
);
