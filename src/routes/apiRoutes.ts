/* eslint-disable new-cap */
import express from 'express';

export const apiRouter = express.Router();

/*
 * GET /api/health
 */
apiRouter.get('/health', async (req, res) => {
  try {
    res.status(200).send({
      message: 'Service is Healthy!',
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
