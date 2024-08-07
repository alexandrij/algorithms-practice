import { ChatStore } from './chat-store.ts';
import { createContext, useContext } from 'react';

export const appStore = {
  chat: new ChatStore(),
};

export const StoreContext = createContext(appStore);

export const useStore = () => {
  return useContext<typeof appStore>(StoreContext);
};
