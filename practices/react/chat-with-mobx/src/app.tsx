import { FC, memo, useCallback, useRef } from 'react';
import { observer } from 'mobx-react';

import classes from './app.module.css';
import { StoreContext, appStore, useStore } from './app-store.ts';

const MessageList: FC = memo(observer(() => {
  const { chat } = useStore();

  console.log('MessageList render', chat.messages);

  return (
    <ul className={classes.mess}>
      {chat.messages.map((m) => {
        return <li key={m.id}>{m.id} {m.text}</li>;
      })}
    </ul>
  );
}));

const MessageForm: FC<{ onSend: (m: string) => void }> = memo(({ onSend }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  console.log('MessageForm render');

  return (
    <div className={classes.messageForm}>
      <textarea ref={textareaRef} />
      <button
        onClick={() => {
          onSend(textareaRef.current?.value || '');
          if (textareaRef.current?.value) {
            textareaRef.current.value = '';
          }
        }}
      >
        Отправить
      </button>
    </div>
  );
});

let revision = 1;
const App: FC = observer(() => {
  const store = useStore();
  const onSend = useCallback((m: string) => appStore.chat.addMessage(m), [store.chat]);

  console.log('App render. Revision ' + revision++);
  console.info(store.chat, store.chat.messages);


  return (
    <div>
      <StoreContext.Provider value={appStore}>
        {/*<div>revision: {chat.revision}</div>*/}
        <MessageForm onSend={onSend} />
        <MessageList />
      </StoreContext.Provider>
    </div>
  );
});

export default App;
