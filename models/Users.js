const mongoose=require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    eposta:{
        unique: true,
        type: String
    },
    parola:String,
})

const User = mongoose.model('User',userSchema);
module.exports = User;