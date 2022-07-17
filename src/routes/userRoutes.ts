/* eslint-disable new-cap */
import express from 'express';
import {UserController} from '../controllers/UserController';


export const userRouter = express.Router();

const userController = new UserController();

/*
 * GET /api/users
 */
userRouter.get('/', async (req, res) => {
  try {
    const response = await userController.getAllUsers();
    res.status(200).send(response);
  } catch (controllerError: any) {
    res.status(500).send(controllerError.message);
  }
});

/*
 * GET /api/users/:username
 */
userRouter.get('/:username', async (req, res) => {
  const {username} = req.params;
  res.send(`Hello ${username}`);
});
