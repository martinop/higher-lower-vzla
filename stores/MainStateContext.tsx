/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { AnimationControls, useAnimation } from 'framer-motion';
import { Search } from '../types';
import data from '../data.json';

type Props = { children: React.ReactNode };

const initialContextState = {
  score: 0,
  highScore: 0,
  control: {},
  nextIndex: 3,
  next: () => {},
  items: {
    left: data[0],
    right: data[1],
    temp: data[2],
  }
};

const initialState = {
  score: 0,
  highScore: 0,
  nextIndex: 3,
  items: {
    left: data[0],
    right: data[1],
    temp: data[2],
  }
};

type ContextState = {
  score: number;
  highScore: number;
  nextIndex: number;
  control: AnimationControls | object;
  next: () => void;
  items: {
    left: Search,
    right: Search,
    temp: Search,
  }
};

type State = Omit<ContextState, "control" | "next">;

const MainStateContext = React.createContext<ContextState>(
  initialContextState
);

function MainStateProvider({ children }: Props) {
  const [state, setState] = React.useState<State>(initialState);
  const control = useAnimation()

  async function next() {
    await control.start("active", { duration: 1 });
    setState({
      score: state.score + 1,
      highScore: state.highScore,
      nextIndex: state.nextIndex + 1,
      items: {
        left: state.items.right,
        right: state.items.temp,
        temp: data[state.nextIndex]
      }
    })
  }
  return (
    <MainStateContext.Provider value={{ ...state, control, next }}>
      {children}
    </MainStateContext.Provider>
  );
}
function useMainState() {
  const context = React.useContext(MainStateContext);
  return context;
}

export { MainStateProvider, useMainState };
