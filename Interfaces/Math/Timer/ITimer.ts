import { IEnableable } from "../../Primitives/Enableable/IEnableable";

export interface ITimer extends IEnableable {
  value: number
  reset: () => void;
  start: () => void;
  stop: () => void;
}