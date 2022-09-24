import { IEnableable } from './../../Primitives/Enableable/IEnableable';

export class IVehicleEngine implements IEnableable {
  enabled: boolean;
  gear: number;
  gears: number;
  disable: () => void;
  enable: () => void;
}