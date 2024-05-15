const User = require('../models/User');

exports.register = (userData) => User.create(userData);

// exports.login = async (username,password) => { const user = await User.findOne({username})};
// if(!user){
//     throw new Error('Invalid username or password!')
// };

