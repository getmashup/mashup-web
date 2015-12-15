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

		exports.insertSampleMashupsData = function(mashupDetails, callback){

			mongoDBClient.collection("mashupsInfo").ensureIndex( { "mashupName" : "text" }, function(){

				mongoDBClient.collection("mashupsInfo").insert(mashupDetails, function(err, results){
					if(err){
						resultData = {
							error: err,
							message: 'Execute failed in insert'
						};
						callback(resultData);
					}else{
						resultData = 'Inserted mashupDetails'+ iterator;
						callback(null, resultData);
					}
				});
			});
		} 

	}
)			