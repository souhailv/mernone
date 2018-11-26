const dbuser = 'root';
const dbpassword = 'lc68902086';

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds115434.mlab.com:15434/mernone`;

//mongodb://root:lc68902086@ds115434.mlab.com:15434/mernone

// heroku config:set MONGODB_URI=mongodb://root:lc68902086@ds115434.mlab.com:15434/mernone -a sheltered-basin-36159

// heroku config:get MONGODB_URI --app sheltered-basin-36159


module.exports = MONGODB_URI;
