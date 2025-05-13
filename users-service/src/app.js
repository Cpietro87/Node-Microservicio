import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en el Puerto: ${PORT}`)
})