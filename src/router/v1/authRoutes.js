import express from 'express';

const router = express.Router();

router.get('/profile', (req, res, next) => {
  res.send('testin....');
});

export default router;
