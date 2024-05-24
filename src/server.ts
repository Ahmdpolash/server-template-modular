import app from "./app.js";
import config from "./app/config/index.js";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.db_uri as string);
    app.listen(config.port, () => {
      console.log(`server running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
