import { FC, memo, useRef, useState } from 'react';

import classes from './app.module.css';

interface Message {
  id: number;
  text: string;
}

const MessageList: FC<{ messages: Array<Message> }> = memo(({ messages }) => {
  console.log('MessageList render');

  return (
    <ul className={classes.mess}>
      {messages.map((m) => {
        return <li key={m.id}>{m.text}</li>;
      })}
    </ul>
  );
});

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
const App: FC = () => {
  const [id, nextId] = useState(1);
  const [messages, setMessages] = useState<Array<Message>>([]);

  console.log('App render. Revision ' + revision++);

  return (
    <div>
      <MessageForm
        onSend={(m) => {
          messages.push({ id: id, text: m });
          setMessages(messages);

          nextId((id) => id + 1);
        }}
      />
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
