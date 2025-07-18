import { useState, useMemo, useEffect } from 'react';

interface CmpProps {
  revision: number;
}

const CmpWithoutMemo = ({ revision }: CmpProps) => {
  const increment = (revision: number) => revision + 1;

  const calculatedValue = increment(revision);

  return <div>Calculated Value: {calculatedValue}</div>;
};

const CmpWithMemo = ({ revision }: CmpProps) => {
  const increment = (revision: number) => revision + 1;

  const calculatedValue = useMemo(() => increment(revision), [revision]);

  return <div>Calculated Value: {calculatedValue}</div>;
};

interface Props {
  withMemo?: boolean;
}

const App = ({ withMemo }: Props) => {
  const [revision, setInput] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setInput((prev) => prev++);
    }, 1000);
  }, []);

  return withMemo ? <CmpWithMemo revision={revision} /> : <CmpWithoutMemo revision={revision} />;
};

export default App;
