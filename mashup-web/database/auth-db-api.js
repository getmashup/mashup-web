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

		var bcrypt = require('bcrypt');		

		exports.getUserDetails = function(reqObj, callback){
			mongoDBClient.collection("usersInfo").findOne({
				username: reqObj.username
			}, function(err, results){
				var resultData = {};
				if(err){
					resultData = {
						error: err,
						message: 'Execute failed in getUserDetails'
					};
					callback(resultData);
				}else{
					if(results){
						resultData = {
							userName: results.userName,
							phone: results.phone,
							displayName: results.displayName,
							email: results.email,
							password: results.password
						};
					}else{
						resultData = {
							username: null,
							phone: null,
							displayName: null,
							email: null,
							password: null
						};
					}
					callback(null, resultData);
				}	
			});	
		}

		exports.registerNewUser = function(reqObj, callback){
			mongoDBClient.collection("usersInfo").insert({
				userName: reqObj.userName,
				displayName: reqObj.displayName,
				phone: reqObj.phone,
				email: reqObj.email,
				password: reqObj.password,
			},function(err, results){
				var resultData = {};
				if(err){
					resultData = {
						error: err,
						message: 'Execute failed in registerNewUser'
					};
					callback(resultData);
				}else{
					resultData = {
						userName: reqObj.userName,
						displayName: reqObj.displayName	
					}
					callback(null, resultData);
				}
			});
		}

		exports.insertSampleUsersData = function(data, callback){
			mongoDBClient.collection("usersInfo").insert(data, function(err, results){
				var resultData;
				if(err){
					resultData = {
						error: err,
						message: 'Execute failed in insertSampleUsersData'
					};
					callback(resultData);
				}else{
					resultData = 'Inserted userDetails';
					callback(null, resultData);
				}
			});
		}

	}
);