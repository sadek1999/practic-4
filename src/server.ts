import mongoose from "mongoose";
import app from "./app";
import config from "./config";


const port = 3000
async function main() {
    console.log(config.db_url, config.port)
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })

  }

  main()