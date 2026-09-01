import express from 'express';
import { handelUser } from './controller/userController.js';

const app = express();

app.set('view engine', 'ejs');

app.get("/users", handelUser)

app.listen(3800);