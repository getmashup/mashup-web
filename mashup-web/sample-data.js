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
		'configs/db-configs/config-mongodb',
	],
	function(exports, async, configMongodb){
		var that = this;

		var insertStoreData = function(){

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

			requirejs(['database/stores-db-api'],function(storesDbApi){
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
					        debug(err);
					    }else{
					    	console.log('Sample store details inserted');
					    	process.exit();
					    }
					}
				)

			});		
		}

		var insertUserData = function(){
			
		}

		configMongodb.configure(function(err, results){
			if(err){
				debug(err);
			}else{
				insertStoreData();

			}
		})
	}
)