import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).send(id);
});

export default app;
