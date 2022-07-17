import {IncomingMessage} from 'http';

export module Core {

  export interface IncomingMessageWithId extends IncomingMessage {
    id: string
  }

  /*
   * ERRORS
   */
  export interface APIError {
    type: string,
    message: string
  }
}
