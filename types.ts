import { AnimationControls } from "framer-motion";
import { Selection } from './enums';

export type Search = {
  name: string;
  searches: number;
  imagePath: string;
  key: number;
}


export type MainContextState = {
  score: number;
  highScore: number;
  currentIndex: number;
  control: AnimationControls | undefined;
  versusControl: AnimationControls | undefined;
  versusRef: React.LegacyRef<HTMLDivElement>;
  evalAnswer: (selection: Selection) => void;
  items: {
    left: Search,
    right: Search,
    temp: Search,
  }
};

export type MainState = Omit<MainContextState, "control" | "evalAnswer" | "next" | "versusRef" | "versusControl">;
