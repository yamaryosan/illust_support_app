import express from "express";
import config from "./src/config";
import router from "./src/routes";
const app = express();

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use("/", router);
