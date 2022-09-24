import { IEnableable } from "../../../Primitives/Enableable/IEnableable";
import { IToasterSetting } from "./Setting/IToasterSetting";

export interface IToaster extends IEnableable {
  enabled: boolean;
  model: string;
  name: string;
  setting: IToasterSetting;
  disable: () => void;
  enable: () => void;
  toast: () => boolean;
}
