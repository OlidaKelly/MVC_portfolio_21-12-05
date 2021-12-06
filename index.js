import express from 'express';
// import connect from './config/db-config.js';
import { setupRoutes } from './routes/index.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


setupRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port} 🎉️`));

