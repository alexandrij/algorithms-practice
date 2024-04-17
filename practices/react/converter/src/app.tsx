import { FC, Reducer, useReducer } from 'react';

const RUB_TO_USD = 1 / 150;
const USD_TO_RUB = 75;

interface State {
  sourceVal: number;
  sourceTitle: string;
  targetVal: number;
  targetTitle: string;
  converter: 'RUB_TO_USD' | 'USD_TO_RUB';
}

type ActionType = 'CONVERT' | 'INVERSE';

interface Action<T = unknown> {
  type: ActionType;
  payload?: T;
}

const initialState: State = {
  sourceTitle: 'RUB',
  sourceVal: 0,
  targetTitle: 'USD',
  targetVal: 0,
  converter: 'RUB_TO_USD',
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'CONVERT': {
      return {
        ...state,
        sourceVal: Number(action.payload),
        targetVal: Math.round(Number(action.payload) * (state.converter === 'USD_TO_RUB' ? 75 : 1 / 150) * 100) / 100,
      };
    }
    case 'INVERSE': {
      const prevState = { ...state };
      const converter = prevState.converter === 'RUB_TO_USD' ? 'USD_TO_RUB' : 'RUB_TO_USD';
      const d = converter === 'USD_TO_RUB' ? 75 : 1 / 150;

      return {
        ...state,
        sourceTitle: prevState.targetTitle,
        targetTitle: prevState.sourceTitle,
        sourceVal: Number(prevState.targetVal),
        targetVal: Number(prevState.targetVal) * d,
        converter: converter,
      };
    }
    default: {
      return state;
    }
  }
};

const App: FC = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

  return (
    <div>
      <div>
        <label>{state.sourceTitle}</label>
        <input
          type="number"
          value={state.sourceVal}
          onChange={(event) => {
            dispatch({
              type: 'CONVERT',
              payload: event.target.value,
            });
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch({ type: 'INVERSE' });
        }}
      >
        {'<->'}
      </button>
      <div>
        <label>{state.targetTitle}</label>
        <input type="number" value={state.targetVal} readOnly />
      </div>
    </div>
  );
};

export default App;
