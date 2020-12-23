import express from 'express';

import authRoutes from './v1/authRoutes';

const router = express.Router();
router.use('/auth', authRoutes);

export default router;
