define(
	[
		'react',
		'./components/login-page',
		'./components/home-page'
	],
	function(React, LoginPage, HomePage){	
		console.log('Loaded the Home Page');
		var body = document.body,
			username = body.getAttribute('data-username');

		if(!username){
			React.render(<LoginPage />, document.getElementById('componentContainer'));
		}else{
			React.render(<HomePage />, document.getElementById('componentContainer'));
		} 
		
	}
);

//webpack --progress --colors --watch (for development)
//webpack -p (for production)