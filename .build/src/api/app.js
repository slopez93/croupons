import bodyParser from "body-parser";
import express from "express";
// import { registerRoutes } from "./routes";
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// registerRoutes(app);
export default app;
