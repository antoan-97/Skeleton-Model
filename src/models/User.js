const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});


userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (this.password !== value) {
            throw new Error('Password missmatch!')
        }
    })

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
});


const User = mongoose.model('User', userSchema);

module.exports = User;


// if(!user) {
//     throw new Error('Invaid username or password!')
// }
// const isValid = await bcrypt.compare(this.password, user.password);
// if(!isValid){
//     throw new Error('Invalid username or password!');
// }
// })