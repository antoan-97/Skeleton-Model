const User = require('../models/User');

exports.register = async (userData) => { const user = await User.findOne({
    username:userData.username});
    if(user){
        throw new error('Username already exists');
    }
    return User.creaete(userData);
    };

// exports.login = async (username,password) => { const user = await User.findOne({username})};
// if(!user){
//     throw new Error('Invalid username or password!')
// };

