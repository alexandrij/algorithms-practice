import { action, makeAutoObservable, observable } from 'mobx';
import { Message } from './types.ts';


export class ChatStore {
  private id: number = 0;

  @observable messages: Message[] = [];
  @observable revision: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action addMessage(message: string): void {
    this.messages.push({ id: ++this.id, text: message });
    this.revision++;
  }

  @action removeMessage(id: number): void {
    this.messages = this.messages.filter((message) => message.id !== id);
    this.revision++;
  }
}