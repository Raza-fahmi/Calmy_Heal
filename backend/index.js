import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import ArticleRoute from "./routes/ArticleRoute.js";
import ExerciseRoute from "./routes/ExerciseRoute.js";
import ReadingRoute from "./routes/ReadingRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import fileUpload from "express-fileupload";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync({ alter: true });
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(fileUpload());
app.use(express.json());
app.use(express.static("public"));
app.use(UserRoute);
app.use(ProductRoute);
app.use(ArticleRoute);
app.use(ExerciseRoute);
app.use(ReadingRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
