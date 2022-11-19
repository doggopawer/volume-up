import express from 'express';
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import "./database.js";
import user from "./router/user.js";
import routine from "./router/routine.js";
import workout from "./router/workout.js";
const app = express()

let corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(helmet());
app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors(corsOptions))
app.use('/user', user);
app.use('/routine', routine);
app.use('/workout', workout);


app.listen(4000, () => {
    console.log("서버 가동중...")
});

