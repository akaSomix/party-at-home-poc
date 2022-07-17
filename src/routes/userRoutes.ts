/* eslint-disable new-cap */
import express from 'express';


export const userRouter = express.Router();

/*
 * GET /api/users
 */
userRouter.get('/', async (req, res) => {
  res.send('Hello From Users');
});

/*
 * GET /api/users/:username
 */
userRouter.get('/:username', async (req, res) => {
  const {username} = req.params;
  res.send(`Hello ${username}`);
});
