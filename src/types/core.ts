import {IncomingMessage} from 'http';

export module Core {

  export interface IncomingMessageWithId extends IncomingMessage {
    id: string
  }

}
