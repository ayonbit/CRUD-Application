const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI);
    /*
    {
      useNewUrlParse: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    } 
    */

    console.log(`MonogoDB Connected:${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
