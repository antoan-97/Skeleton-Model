const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = async (userData) => { 
    const user = await User.findOne({username:userData.username});
    if(user){
        throw new error('Username already exists');
    }
    return User.create(userData);
    };

exports.login = async (username,password) => { 
const user = await User.findOne({username});
if(!user) {
    throw new Error('Invaid username or password!')
}
const isValid = await bcrypt.compare(password, user.password);
if(!isValid){
    throw new Error('Invalid username or password!');
}

}



