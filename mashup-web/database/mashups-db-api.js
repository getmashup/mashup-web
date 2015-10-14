define(
	[
		'exports',
		'../configs/db-configs/config-redis',
		'../configs/db-configs/config-mongodb'
	],function(exports, configRedis, configMongo){
		var db;
		var ObjectID = require('mongodb').ObjectID;

		var mongoDBClient = configMongo.mongoClientDB(),
			that = this,
			debug = require('debug')('mashup:auth-db-api');

		exports.insertSampleStoresData = function(storeDetails, callback){
			mongoDBClient.collection("storesInfo").ensureIndex( { "location" : "2dsphere" }, function(){

				mongoDBClient.collection("storesInfo").ensureIndex( { "storeItems.item" : "text" }, function(){

					mongoDBClient.collection("storesInfo").insert(storeDetails, function(err, results){
						if(err){
							resultData = {
								error: err,
								message: 'Execute failed in insert'
							};
							callback(resultData);
						}else{
							resultData = 'Inserted storeDetails'+ iterator;
							callback(null, resultData);
						}
					});
				})
			})
		} 

	}
)			