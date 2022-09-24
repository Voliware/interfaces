import { IEnableable } from '../../../../Primitives/Enableable/IEnableable';

export interface IToasterSetting extends IEnableable {
  interval: number;
  level: number;
}