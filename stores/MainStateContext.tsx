import * as React from 'react';
import { animate, useAnimation } from 'framer-motion';
import { MainContextState, MainState } from '../types';
import data from '../data.json';
import { Selection, VersusAnimation } from '../enums';

const initialState = {
  score: 0,
  highScore: 0,
  currentIndex: 2,
  items: { left: data[0], right: data[1], temp: data[2] }
};

const initialContextState = {
  ...initialState,
  control: undefined,
  versusControl: undefined,
  versusRef: undefined,
  evalAnswer: ()  => {},
};

const MainStateContext = React.createContext<MainContextState>(initialContextState);

function MainStateProvider({ children }) {
  const [state, setState] = React.useState<MainState>(initialState);
  const versusRef = React.useRef(undefined);
  const control = useAnimation()
  const versusControl = useAnimation()

  function animateBgColor(node: HTMLElement) {
    return new Promise<void>((resolve) => {
      animate(0, 100, {
        duration: 1,
        onUpdate: (value) => {
          node.style.height = `${value}%`
        },
        onComplete: resolve,
      });
    })
	}

	async function animateLoser() {
		const versusNode: HTMLDivElement = versusRef?.current;
		versusNode.style.backgroundColor = "#DC2625"
    await animateBgColor(versusNode)
	}

	async function animateWinner() {
		const versusNode: HTMLDivElement = versusRef?.current;
		versusNode.style.backgroundColor = "#25dc5f"

    await animateBgColor(versusNode)
    versusControl.start(VersusAnimation.HIDDEN)
    await control.start("active", { duration: 1 });

    const nextCurrentIndex = state.currentIndex + 1;
    const nextTemp = data[nextCurrentIndex];
  
    const score = state.score + 1;
    setState({
      ...state,
      score,
      highScore: score > state.highScore ? score : state.highScore,
      currentIndex: nextCurrentIndex,
      items: {
        left: state.items.right,
        right: state.items.temp,
        temp: nextTemp
      }
    })
    if(nextTemp) {
      versusControl.start(VersusAnimation.VISIBLE)
      versusNode.style.height = "0"
    } else {
      console.log("YOU ARE GODLIKE")
    }
	}

  function evalAnswer(selection: Selection) {
    const current = state.items.right;
    const comparator = state.items.left
    const isHigherOK = selection === Selection.HIGHER && current.searches > comparator.searches
		const isLowerOK = selection === Selection.LOWER && current.searches < comparator.searches
    const isCorrect = isHigherOK || isLowerOK
  
    if(isCorrect) {
      animateWinner()
		} else {
      animateLoser()
      setState({
        ...state,
        highScore: state.score > state.highScore ? state.score : state.highScore
      })
			console.log("LOSER PAGE")
		}
  }
  return (
    <MainStateContext.Provider value={{ ...state, control, evalAnswer, versusRef, versusControl }}>
      {children}
    </MainStateContext.Provider>
  );
}

function useMainState() {
  const context = React.useContext(MainStateContext);
  return context;
}

export { MainStateProvider, useMainState };
