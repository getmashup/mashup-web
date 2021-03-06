var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(
	[
		'exports',
		'async',
		'crypto',
		'configs/db-configs/config-mongodb',
	],
	function(exports, async, crypto, configMongodb){
		var that = this;

		var bcrypt = require('bcrypt'),
		    SALT_WORK_FACTOR = 10;

		var insertStoreData = function(mainCallback){

			var storesInfo = [
				{
				    storeId: 'wallmart01',
				    storeName: 'Wallmart Indiranagar Branch',
				    phone: '1234',
				    ratings: 4/5,
				    location: {
				        "type" : "Point",
				        "address" : "298, 100th Feet Rd, Binnamangala, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038, India",
				        "coordinates" : [
				            77.64059099999997,
				            12.979234
				        ]
				    },
				    storeItems: [
				        {
				            item: 'salt',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'paneer',
				            quantity: '500 grams',
				            price: 'Rs.100'
				        },
				        {
				            item: 'tomatoes',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'garam masala',
				            quantity: '200 grams',
				            price: 'Rs.30'
				        },
				        {
				        	item: 'milk',
				        	quantity: '1 litre',
				        	price: 'Rs.20'
				        },
				        {
				        	item: 'onions',
				        	quantity: '1 kg',
				        	price: 'Rs.20'
				        }
				    ]
				},

				{
				    storeId: 'wallmart02',
				    storeName: 'Wallmart Ulsoor Branch',
				    phone: '1234',
				    ratings: 4/5,
				    location: {
		                "type" : "Point",
		                "address" : "16, D Bhaskaran Rd, Murphy Town, Ulsoor, Bengaluru, Karnataka 560008, India",
		                "coordinates" : [
		                    77.62855850000005,
		                    12.9817147
		                ]
		            },
				    storeItems: [
				        {
				            item: 'salt',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'paneer',
				            quantity: '500 grams',
				            price: 'Rs.100'
				        },
				        {
				            item: 'tomatoes',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'garam masala',
				            quantity: '200 grams',
				            price: 'Rs.30'
				        },
				        {
				        	item: 'rava',
				        	quantity: '1 kg',
				        	price: 'Rs.60'
				        },
				        {
				        	item: 'rice',
				        	quantity: '1 kg',
				        	price: 'Rs.40'
				        },
				        {
				        	item: 'eggs',
				        	quantity: '1 dozen',
				        	price: 'Rs.50'
				        }
				    ]
				},

				{
				    storeId: 'wallmart03',
				    storeName: 'Wallmart Adugodi Branch',
				    phone: '1234',
				    ratings: 4/5,
			        location: {
		                "type" : "Point",
		                "address" : "21, Hosur Rd, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029, India",
		                "coordinates" : [
		                    77.61206400000003,
		                    12.934689
		                ]
			        },
				    storeItems: [
				        {
				            item: 'carrots',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'potatoes',
				            quantity: '1 kg',
				            price: 'Rs.15'
				        },
				        {
				            item: 'tomatoes',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'puliogare mix',
				            quantity: '200 grams',
				            price: 'Rs.30'
				        },
				        {
				        	item: 'eggs',
				        	quantity: '1 dozen',
				        	price: 'Rs.50'
				        }
				    ]
				},

				{
				    storeId: 'reliancefresh01',
				    storeName: 'Reliance Fresh Indiranagar Branch',
				    phone: '1234',
				    ratings: 4/5,
				    location: {
				        "type" : "Point",
		        		"address" : "Stage 2, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038, India",
		        		"coordinates" : [
		        			77.6345299,
		        			12.975955
		        		]
				    },
				    storeItems: [
				        {
				            item: 'potatoes',
				            quantity: '1 kg',
				            price: 'Rs.15'
				        },
				        {
				            item: 'onions',
				            quantity: '1 kg',
				            price: 'Rs.15'
				        },
				        {
				            item: 'tomatoes',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'cucumber',
				            quantity: '1 kg',
				            price: 'Rs.30'
				        },
				        {
				            item: 'capsicum',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'carrots',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'salt',
				            quantity: '1 kg',
				            price: 'Rs.20'
				        },
				        {
				            item: 'paneer',
				            quantity: '500 grams',
				            price: 'Rs.100'
				        },
				        {
				            item: 'garam masala',
				            quantity: '200 grams',
				            price: 'Rs.30'
				        }

				    ]
				}
			];

			var functionArray = [];

			requirejs(
				[
					'database/stores-db-api',
				],
				function(storesDbApi){
					function makeFunctionList(storeDetails){
					    return function(callback){
					        storesDbApi.insertSampleStoresData(storeDetails, callback);
					    }
					}

					for(var i=0; i<storesInfo.length; i++){
						functionArray.push(makeFunctionList(storesInfo[i]));
					}
					async.parallel(
						functionArray,
						function(err, results) {
						    if(err){
						        mainCallback(err);
						    }else{
						    	mainCallback(null, 'Sample store details inserted');
						    }
						}
					)
				}
			);		
		}

		var insertUserData = function(mainCallback){

			var usersInfo = [
				{
			       	username: 'guest01',
			       	displayName: 'Guest 01',
			       	phone: '123',
			       	email: 'guest01@mashup.com',
			       	password: 'guest01',
			       	location: {
				        "type" : "Point",
				        "address" : "298, 100th Feet Rd, Binnamangala, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038, India",
				        "coordinates" : [
				            77.64059099999997,
				            12.979234
				        ]
				    },
			       	mashups: [
			       		{
			       			name: 'Paneer Butter Masala',
			       			receipeId: 'guest01receipe01'
			       		},
			       		{
			       			name: 'Masala Omlette',
			       			receipeId: 'guest01receipe02'
			       		},
			       		{
			       			name: 'Upma',
			       			receipeId: 'guest01receipe03'
			       		}
			       	]   
			   	},
			   	{
			       	username: 'guest02',
			       	displayName: 'Guest 02',
			       	phone: '456',
			       	email: 'guest02@mashup.com',
			       	password: 'guest02',
			       	location: {
		                "type" : "Point",
		                "address" : "16, D Bhaskaran Rd, Murphy Town, Ulsoor, Bengaluru, Karnataka 560008, India",
		                "coordinates" : [
		                    77.62855850000005,
		                    12.9817147
		                ]
		            },
			       	mashups: [
			       		{
			       			name: 'Paneer Butter Masala',
			       			receipeId: 'guest02receipe01'
			       		},
			       		{
			       			name: 'Masala Omlette',
			       			receipeId: 'guest02receipe02'
			       		},
			       		{
			       			name: 'Upma',
			       			receipeId: 'guest02receipe03'
			       		}
			       	]   
			   	},
			   	{
			       	username: 'guest03',
			       	displayName: 'Guest 03',
			       	phone: '789',
			       	email: 'guest03@mashup.com',
			       	password: 'guest03',
			       	location: {
		                "type" : "Point",
		                "address" : "21, Hosur Rd, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029, India",
		                "coordinates" : [
		                    77.61206400000003,
		                    12.934689
		                ]
			        },
			       	mashups: [
			       		{
			       			name: 'Paneer Butter Masala',
			       			receipeId: 'guest03receipe01'
			       		},
			       		{
			       			name: 'Masala Omlette',
			       			receipeId: 'guest03receipe02'
			       		},
			       		{
			       			name: 'Upma',
			       			receipeId: 'guest03receipe03'
			       		}
			       	]   
			   	},
			   	{
			       	username: 'guest04',
			       	displayName: 'Guest 04',
			       	phone: '987',
			       	email: 'guest04@mashup.com',
			       	password: 'guest04',
			       	location: {
				        "type" : "Point",
		        		"address" : "Stage 2, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038, India",
		        		"coordinates" : [
		        			77.6345299,
		        			12.975955
		        		]
				    },
			       	mashups: [
			       		{
			       			name: 'Paneer Butter Masala',
			       			receipeId: 'guest04receipe01'
			       		},
			       		{
			       			name: 'Masala Omlette',
			       			receipeId: 'guest04receipe02'
			       		},
			       		{
			       			name: 'Upma',
			       			receipeId: 'guest04receipe03'
			       		}
			       	]   
			   	},
			   	{
			       	username: 'guest05',
			       	displayName: 'Guest 05',
			       	phone: '654',
			       	email: 'guest05@mashup.com',
			       	password: 'guest05',
			       	location: {
			           	"type" : "Point",
			           	"address" : "Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038, India",
			           	"coordinates" : [
			               	77.634955,
			               	12.975955
			           	]
			       	},
			       	mashups: [
			       		{
			       			name: 'Paneer Butter Masala',
			       			receipeId: 'guest05receipe01'
			       		},
			       		{
			       			name: 'Masala Omlette',
			       			receipeId: 'guest05receipe02'
			       		},
			       		{
			       			name: 'Upma',
			       			receipeId: 'guest05receipe03'
			       		}
			       	]   
			   	}
			];

			var functionArray = [];

			requirejs(
				[
					'database/auth-db-api',
				],
				

				function(authDbApi){
					function makeFunctionList(userDetails){
						
					    return function(callback){
					    	var token = crypto.randomBytes(15).toString('hex');

					    	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
					    		if (err){
					    		    console.log(err);
					    		}
					    		// hash the password using our new salt
					    		bcrypt.hash(userDetails.password, salt, function(err, hash) {
						    		if (err) return next(err);
						    		
						    		// override the cleartext password with the hashed one
						    		userDetails.password = hash;
						        	authDbApi.insertSampleUsersData(userDetails, callback);
						        });	
					    	});
					    }
					}

					for(var i=0; i<usersInfo.length; i++){
						functionArray.push(makeFunctionList(usersInfo[i]));
					}
					async.parallel(
						functionArray,
						function(err, results) {
						    if(err){
						        mainCallback(err);
						    }else{
						    	mainCallback(null, 'Sample user details inserted');
						    }
						}
					)
				}
			);
		}

		var insertMashupsData = function(mainCallback){
			var mashupsInfo = [
				{
				    mashupName: 'Fried Masala Omlette',
				    createdBy: 'Recommended',
				    ratings: '4/5',
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
				},
				{
				    mashupName: 'Paneer Butter Masala',
				    createdBy: 'Recommended',
				    ratings: '4/5',
				    receipeDescription: 'First chop tomatoes. Then ... ',
				    receipeItems: [
				        {
				            item: 'paneer',
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
				            item: 'butter',
				            quantity: '50 grams'
				        },

				    ]
				},
				{
				    mashupName: 'Fried Masala Omlette',
				    createdBy: 'guest01',
				    ratings: '4/5',
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
				},
				{
				    mashupName: 'Fried Masala Omlette',
				    createdBy: 'guest02',
				    ratings: '4/5',
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
				},
				{
				    mashupName: 'Paneer Butter Masala',
				    createdBy: 'guest03',
				    ratings: '4/5',
				    receipeDescription: 'First chop tomatoes. Then ... ',
				    receipeItems: [
				        {
				            item: 'paneer',
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
				            item: 'butter',
				            quantity: '50 grams'
				        },

				    ]
				},
				{
				    mashupName: 'Paneer Butter Masala',
				    createdBy: 'guest04',
				    ratings: '4/5',
				    receipeDescription: 'First chop tomatoes. Then ... ',
				    receipeItems: [
				        {
				            item: 'paneer',
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
				            item: 'butter',
				            quantity: '50 grams'
				        },

				    ]
				},
				{
				    mashupName: 'Paneer Butter Masala',
				    createdBy: 'guest05',
				    ratings: '4/5',
				    receipeDescription: 'First chop tomatoes. Then ... ',
				    receipeItems: [
				        {
				            item: 'paneer',
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
				            item: 'butter',
				            quantity: '50 grams'
				        },

				    ]
				}
			];

			var functionArray = [];

			requirejs(
				[
					'database/mashups-db-api',
				],
				function(storesDbApi){
					function makeFunctionList(mashupDetails){
					    return function(callback){
					        storesDbApi.insertSampleMashupsData(mashupDetails, callback);
					    }
					}

					for(var i=0; i<mashupsInfo.length; i++){
						functionArray.push(makeFunctionList(mashupsInfo[i]));
					}
					async.parallel(
						functionArray,
						function(err, results) {
						    if(err){
						        mainCallback(err);
						    }else{
						    	mainCallback(null, 'Sample mashup details inserted');
						    }
						}
					)
				}
			);
		}

		configMongodb.configure(function(err, results){
			if(err){
				console.log(err);
			}else{
				async.auto(
					{
						one: function(callback){
							insertStoreData(callback);
						},
						two: function(callback){
							insertUserData(callback);
						},
						three: function(callback){
							insertMashupsData(callback);
						}
					}, function(err, results){
						if(err){
						    console.log(err);
						}else{
						    console.log(results);
						    process.exit();
						}
					}
				)	

			}
		})
	}
)