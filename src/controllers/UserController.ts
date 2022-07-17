import {Models} from '../types/models';

const fakeData: Models.User[] = [
  {
    name: 'Marco',
    surname: 'Bianchi',
    age: 21,
  },
  {
    name: 'Fabiana',
    surname: 'Girolami',
    age: 24,
  },
];

/**
 *
 */
export class UserController {
  /**
   *
   * @return {any}
   */
  async getAllUsers(): Promise<Array<Models.User>> {
    return fakeData;
  }
}
