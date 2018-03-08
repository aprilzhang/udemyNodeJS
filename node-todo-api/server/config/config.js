//Heroku sets this toe 'production'
var env = process.env.NODE_ENV || 'development'; //default to development

console.log('env *****', env);

//heroku config
//heroku config:set
//heroku config:get
//heroku config:unset

if(env === 'development' || env === 'test') {
	var config = require('./config.json');
	var envConfig = config[env];
	
	Object.keys(envConfig).forEach((key) => {
		process.env[key] = envConfig[key];
	});	
}
