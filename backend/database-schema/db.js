const mongoose = require("mongoose");

const uri = process.env.MONGO_URI + "/card";  // Access the MongoDB connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
    links: [{
        type: mongoose.Schema.Types.ObjectId
    }]
})


const User = mongoose.model("User", UserSchema);

module.exports = {
    User
}