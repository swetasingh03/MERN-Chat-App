const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/mernChatApp"
    );
    console.log(
      `server connected to the database ${conn.connection.host}`.blue.underline
    );
  } catch (error) {
    console.log(`Error:${error.Message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
