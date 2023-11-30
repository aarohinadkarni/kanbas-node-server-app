import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
Lab5(app)
Hello(app)
CourseRoutes(app);
app.listen(process.env.PORT || 4000);