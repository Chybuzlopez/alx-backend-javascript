import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const port = 1245;

controllerRouting(app);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

export default app;
