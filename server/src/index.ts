import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { cityRoutes } from './routes';
import { errorHandler } from './middleware/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', cityRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});